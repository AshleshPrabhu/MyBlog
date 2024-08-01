import React,{useEffect,useState} from 'react'
import appwriteService from '../appwrite/config'
import {Container,PostCard} from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
    const [searchText, setSearchText] = useState("")
    const [posts,setPosts] = useState([])
    const status = useSelector((state)=>state.auth.status)
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    
    // const searchPosts=useSelector((state)=>state.posts.searchPosts)
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

    const searchPosts =posts && posts.filter((post) =>post.title.toLowerCase().includes(searchText.trim().toLowerCase()));
    
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
            <div className='w-full flex items-center justify-center h-14'>
                <div className='md:w-[800px] flex w-[440px] '>
                    <input 
                    type="text" 
                    className='flex-1 rounded-lg placeholder:text-center text-xl transition-colors duration-300 pl-5 border border-gray-500 text-black placeholder-black dark:placeholder-white dark:text-white dark:bg-gray-700 dark:border-white ' 
                    placeholder='Search for Blogs'
                    value={searchText}
                    onChange={(e)=>setSearchText(e.target.value)}/>
                    <button className=' w-12 h-12 rounded-lg bg-orange-500'><i className="fa-solid fa-magnifying-glass dark:text-white"/></button>
                </div>
            </div>
        <Container>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 bg-gray-300 dark:bg-gray-700'>
                {searchPosts?.map((post)=>(
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