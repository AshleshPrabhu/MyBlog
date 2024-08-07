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
    async passwordRecovery({email}) {
        try {
            const response =  await this.account.createRecovery(email, "https://my-blog-ashlesh.vercel.app/reset-password");
            if (response) {
                return response;
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
                'my-blog-ashlesh.vercel.app/',
                'my-blog-ashlesh.vercel.app/login');
        } catch (error) {
            console.log("Appwrite serive :: googleLogin :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService
