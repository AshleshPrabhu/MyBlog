import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import{Container,PostForm} from '../components'
import appwriteService from '../appwrite/config'
import { toast } from 'sonner'
function EditPost() {
    const [posts,setPosts] = useState(null)
    const {slug} = useParams()
    // console.log(useParams())
    const navigate = useNavigate()
    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if (post) {
                    setPosts(post)
                }
                else{
                    // console.log("couldnt get post")
                    toast.error("Couldnt get post")
                    navigate('/')
                }
            })
        }else{
            navigate('/')
        }
    },[slug,navigate])


    return posts? (
    <div className=' py-8'>
        <Container>
            <PostForm  post={posts} />
        </Container>
    </div>
):null
}

export default EditPost