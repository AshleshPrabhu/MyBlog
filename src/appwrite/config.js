import conf from "../conf/conf.js";
import { Client, ID, Databases, Query, Storage } from "appwrite";

export class Service{
    Client= new Client();
    databases;
    bucket;

    constructor(){
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.Client);
        this.bucket = new Storage(this.Client);
    }

    // function for connecting posts with database
    
    // add post to database
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,         
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error
        }
    }

    // update post present in database
    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    //delete post from database
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        }
        catch(error){
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }
    
    // get a post from database
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }
        catch(error){
            console.log("Appwrite service :: getPost :: error", error);
            return false
        }
    }

    // get all posts from database with active status
    async getPosts(queries=[Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        }
        catch(error){
            console.log("Appwrite service :: getPosts :: error", error);
            return false;  
        }
    }

    //user data storage in database
    
    // save user in database
    async saveUser({userId,userName,userEmail}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteuserdetailsId,
                userId,         
                {   
                    userId,
                    userName,
                    userEmail
                }
            )
        } catch (error) {
            throw error
        }
    }

    // edit user data from database
    async editUser(userId,{userName,userEmail}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteuserdetailsId,
                userId,
                {
                    userName,
                    userEmail
                }
            )
        } catch (error) {
            console.log("Appwrite service :: editUser :: error", error);
        }
    }

    // delete user from database
    async deleteUser(userId){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteuserdetailsId,
                userId
            )
            return true
        }
        catch(error){
            console.log("Appwrite service :: deleteUser :: error", error);
            return false;
        }
    }
    
    // get a user from database
    async getoneUser(userId){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteuserdetailsId,
                userId
            )
        }
        catch(error){
            console.log("Appwrite service :: getoneUser :: error", error);
            return false
        }
    }

    // get all users from database
    async getAllUsers(){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteuserdetailsId
            )
        }
        catch(error){
            console.log("Appwrite service :: getAllUsers :: error", error);
            return false;  
        }
    }

    // comments storage in database

    // add comments to database
    async addComments({slug,comments}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwritecommentsId,
                slug,
                {   
                    slug,
                    comments
                }
            )
        }catch(error){
            console.log("Appwrite service :: addComment :: error", error);
        }
    }

    // edit comments present in database
    async editComments({slug,comments}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwritecommentsId,
                slug,
                {   
                    slug,
                    comments
                }
            )
        } catch (error) {
            console.log("Appwrite service :: editComment :: error", error);
        }
    }

    // get all comments from database
    async getAllComments(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwritecommentsId,
            )
        } catch (error) {
            console.log("Appwrite service :: getAllComments :: error", error);
            return false;
        }
    }

    // file upload service using storage

    // upload a file to storage
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        }
        catch(error){
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    // delete file from storage
    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        }
        catch(error){
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    // get preview of file 
    getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId   
            )
        } catch (error) {
            console.log("Appwrite service :: getFilePreview :: :: error", error)
            return false
        }
    }
}

const service = new Service();
export default service 
