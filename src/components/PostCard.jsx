import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className=' w-full bg-gray-100 border-black dark:bg-gray-900 rounded-xl p-4 h-96'>
            <div className=' w-full justify-center mb-4 h-3/4'>
            <LazyLoadImage
              alt={title}
              effect="opacity"
              className=' rounded-xl h-64 md:w-64 w-96 sm:w-[530px]'
              src={appwriteService.getFilePreview(featuredImage)} 
              placeholderSrc={appwriteService.getFilePreview(featuredImage)} 
              
              />
            </div>
            <h2 className=' text-xl font-bold dark:text-white'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard