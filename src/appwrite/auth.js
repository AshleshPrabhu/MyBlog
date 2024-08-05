import conf from '../conf/conf.js';
import { Client, Account, ID, OAuthProvider } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    // appwrite functions for authentication

    // creating new account
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({email, password});
            } else {
                return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // login 
    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // get current user
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null;
    }

    // logout
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }

    //recover password with email
    async passwordRecovery({email,url='http://localhost:5173/reset-password'}) {
        try {
            const responce =  await this.account.createRecovery(email, url);
            if (responce) {
                return responce;
            }
            else{
                return null;
            }
        } catch (error) {
            console.log("Appwrite serive :: passwordRecovery :: error", error);
        }
    }

    // reset password
    async resetPassword({userId, secret, password,newpassword}) {
        try {
            return await this.account.updateRecovery(userId, secret, password, newpassword);
        } catch (error) {
            console.log("Appwrite serive :: resetPassword :: error", error);
        }
    }

    // google login
    async googleLogin() {
        try {
            this.account.createOAuth2Session(
                OAuthProvider.Google, 
                'https://localhost:5173/',
                'https://localhost:5173/login');
        } catch (error) {
            console.log("Appwrite serive :: googleLogin :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService
