import React,{useEffect,useState} from 'react'
import appwriteService from '../appwrite/config'
import {Container,PostCard} from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
    const [posts,setPosts] = useState([])
    const status = useSelector((state)=>state.auth.status)
    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
            else{
                setPosts([])
            }
        })
    },[])
    
    if (posts.length === 0|| status=='false') {
        return (
            <div className="w-full py-36 mt-4 text-center bg-gray-300 dark:bg-gray-700">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                        <Link to={"/login"}>
                            <h1 className="text-2xl font-bold text-black hover:text-white dark:text-white dark:hover:text-black">
                                Welcome to MyBlog
                                <br/>
                                Please Login to read posts
                            </h1>
                        </Link>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return(
        <div className=' w-full py-8 bg-gray-300 dark:bg-gray-700'>
        <Container>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 bg-gray-300 dark:bg-gray-700'>
                {posts.map((post)=>(
                    <div key={post.$id} className=' p-2 w-full '>
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
    )
}

export default Home