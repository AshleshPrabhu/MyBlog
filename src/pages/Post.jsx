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
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    const [commentsData, setCommentsData] = useState(comments)
    const {insertNode,editNode,deleteNode}=useNode()
    const handleInsertNode = async(folderId,item)=>{
        const finalStructure = insertNode(commentsData,folderId,item)
        await appwriteService.addComments({slug:slug,comments:JSON.stringify(finalStructure)})
        setCommentsData(finalStructure)
    }
    const handleEditNode = async(folderId,value)=>{
        const finalStructure = editNode(commentsData,folderId,value)
        await appwriteService.editComments({slug:slug,comments:JSON.stringify(finalStructure)})
        setCommentsData(finalStructure)
    }
    const handleDeleteNode = async(folderId)=>{
        const finalStructure = deleteNode(commentsData, folderId)
        const temp={...finalStructure}
        await appwriteService.editComments({slug:slug,comments:JSON.stringify(temp)})

        setCommentsData(temp)
    }

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    console.log("this is a post",post)
                    userget(post)
                    setPost(post)
                }
                else {navigate("/")};
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                toast.success("Post deleted successfully");
                navigate("/");
            }
            else toast.error("Failed to delete post");
        });
    };
    

    const userget = async(posts)=>{
        // console.log("this is post",posts) 
        const newdata = await appwriteService.getAllUsers()
        // console.log("this is all data",newdata)
        // console.log(newdata.documents)
        newdata.documents.map((ele)=>{
            if(ele.userId === posts.userId){
                setUser(ele)
                return
            }
            else{}
        })
        // console.log("this is user",User)
        // const data = await appwriteService.getoneUser({userId:posts.userId})
        // console.log("this is a data",data)
        // setUser(data)
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
                {/* <div>
                    <Comments key={comments.id} comments={comments} handleComment={handleComment} handleDelete={handleDelete}/>
                </div> */}
                <div className="border-t-2 border-gray-700 dark:border-white my-5" />
                <div className="w-full flex items-center justify-center h-10 ">
                    <h1 className="text-2xl font-bold text-gray-700 dark:text-white">COMMENTS</h1>
                </div>
                <AllComments
                comment={commentsData}
                handleInsertNode={handleInsertNode}
                handleEditNode={handleEditNode}
                handleDeleteNode={handleDeleteNode}
                slug={slug}
                />
            </Container>
        </div>
    ) : null;
}