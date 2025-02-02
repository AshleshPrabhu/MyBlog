import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { toast } from 'sonner'
import AllComments from '../components/comments/AllComments'
import useNode from '../hooks/useNode'


export default function Post() {
    const comments={
        id:1,
        items:[]
    }
    const [User, setUser] = useState(null)
    const [count, setCount] = useState(0)
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    const [commentsData, setCommentsData] = useState(comments)
    const {insertNode,editNode,deleteNode}=useNode()
    // Get comments from database to display on loading
    const effect=async()=>{
        const resp = await appwriteService.getAllComments()
        if(resp){
            const data = resp?.documents
            data.forEach(element => {
                if(element.slug===slug){
                    setCommentsData(JSON.parse(element.comments))
                    setCount(1)
                    return
                }
                });
        }
        else{
            setCommentsData(comments)
        }
    }
    // add comment to database
    const handleInsertNode = async(folderId,item)=>{
        try {
            const finalStructure = insertNode(commentsData,folderId,item)
            if(count===0){
                const result = await appwriteService.addComments({slug:slug,comments:JSON.stringify(finalStructure)})
                if(result) { setCount(1)}
                else{
                    toast.error('Couldnt add comment')
                }
            }
            else{
                const result = await appwriteService.editComments({slug:slug, comments:JSON.stringify(finalStructure)})
                if(!result) {
                    toast.error('Couldnt add comment')
                }
            }
            const resp = await appwriteService.getAllComments()
            const data = resp?.documents
            data.forEach(element => {
                if(element.slug===slug){
                    setCommentsData(JSON.parse(element.comments))
                    return
                }
            });
        } catch (error) {
            toast.error("Failed To insert node")
        }
    }
    // edit comment in database
    const handleEditNode = async(folderId,value)=>{
        try {
            const finalStructure = editNode(commentsData,folderId,value)
            const result = await appwriteService.editComments({slug:slug,comments:JSON.stringify(finalStructure)})
            if(!result){
                toast.error('Couldnt edit comment')
            }else{
                const resp = await appwriteService.getAllComments()
                const data = resp?.documents
                data.forEach(element => {
                    if(element.slug===slug){
                        setCommentsData(JSON.parse(element.comments))
                        return
                    }
                });
            }
        } catch (error) {
            toast.error("Failed to edit comment")
        }
    }
    // delete comment from database
    const handleDeleteNode = async(folderId)=>{
        try {
            const finalStructure = deleteNode(commentsData, folderId)
            const temp={...finalStructure}
            const result = await appwriteService.editComments({slug:slug,comments:JSON.stringify(temp)})
            if(!result){
                toast.error("couldnt delete post")
            }
            else{
                toast.success("comment deleted successfully")
                const resp = await appwriteService.getAllComments()
                const data = resp?.documents
                data?.forEach(element => {
                    if(element.slug===slug){
                        setCommentsData(JSON.parse(element.comments))
                        return
                    }
                });
            }
        } catch (error) {
            toast.error("Failed to delete comment")
        }
    }

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    getUser(post)
                    setPost(post)
                    effect()
                }
                else {navigate("/")};
            });
        } else navigate("/");
    }, [slug, navigate]);
    // delete post if present
    const deletePost = () => {
        try {
            appwriteService.deletePost(post?.$id).then((status) => {
                if (status) {
                    appwriteService.deleteFile(post.featuredImage);
                    toast.success("Post deleted successfully");
                    navigate("/");
                }
                else toast.error("Failed to delete post");
            });
        } catch (error) {
            toast.error("An error occurred while deleting the post")
        }
    };
    
    // get user who created the post
    const getUser = async(posts)=>{
        try {
            const newdata = await appwriteService.getAllUsers()
            newdata?.documents.map((ele)=>{
                if(ele?.userId === posts?.userId){
                    setUser(ele)
                    return
                }
                else{}
            })
        } catch (error) {
            toast.error("Failed to fetch user data")
        }
    }

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <LazyLoadImage
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        effect="opacity"
                        alt={post.title}
                        className="rounded-xl"
                        placeholderSrc={appwriteService.getFilePreview(post.featuredImage)}
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold text-gray-700 dark:text-white">{post.title}</h1>
                </div>
                <div className="browser-css text-gray-700 dark:text-white">
                    {parse(post.content)}
                </div>
                <br />
                <br />
                <br />
                <div className=" mb-5">
                    <h2 className="text-lg  text-gray-700 dark:text-white">Post Created By: {User?.userName} </h2>
                </div>
                <div className="border-t-2 border-gray-700 dark:border-white my-5" />
                <div className="w-full flex items-center justify-center h-10 ">
                    <h1 className="text-2xl font-bold text-gray-700 dark:text-white">COMMENTS</h1>
                </div>
                <AllComments
                    comment={commentsData}
                    handleInsertNode={handleInsertNode}
                    handleEditNode={handleEditNode}
                    handleDeleteNode={handleDeleteNode}
                />
            </Container>
        </div>
    ) : null;
}