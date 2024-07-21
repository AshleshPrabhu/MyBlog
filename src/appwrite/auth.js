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

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }

    async passwordRecovery({email='ashlesh.prabhu5@gmail.com',url='http://localhost:5173/reset-password'}) {
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

    async resetPassword({userId='66934432001b150dd329 ', secret='652fe5759be9fe385245c682f712df623e687c6c26ac4a1de08db93af435cb40ad007bdb4efd3259b74f894d5addb9b2b475e5514cfa55186ee150d69e457a4ba8f2cf3a30b0bd1216f81f4fa32567ed7bb315730b39fc525d5165e7a2ba88e3da82c141f18680df941ce2f36263e7b1c15e8efc726dd5ccf558505817660d76', password='12345678',newpassword='1234567890'}) {
        try {
            return await this.account.updateRecovery(userId, secret, password, newpassword);
        } catch (error) {
            console.log("Appwrite serive :: resetPassword :: error", error);
        }
    }

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
