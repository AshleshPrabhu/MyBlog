import React,{useState,useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container,PostCard } from '../components'
import { toast } from 'sonner'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts().then((posts)=>{
            if (posts) {
                setPosts(posts.documents)
            }
            else{
                toast.error('No posts found')
            }
        })
    }, [])
    
    return (
    <div className=' w-full py-8 bg-gray-300 dark:bg-gray-700'>
        <Container>
            <div className=' grid grid-cols-4 gap-7 bg-gray-300 dark:bg-gray-700'>
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

export default AllPosts