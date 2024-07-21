import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import authService from '../appwrite/auth';
import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {useSelector} from 'react-redux'
function PostCard({$id, title, featuredImage}) {
  // const userData = useSelector((state) => state.auth.userData);
  
  
  // console.log("featuredimage",featuredImage)
  // console.log(appwriteService.getFilePreview(featuredImage))
  return (
    <Link to={`/post/${$id}`}>
        <div className=' w-full bg-gray-100 border-black dark:bg-gray-900 rounded-xl p-4 h-96'>
            <div className=' w-full justify-center mb-4 h-3/4'>
            <LazyLoadImage
              alt={title}
              effect="opacity"
              className=' rounded-xl h-64 w-64'
              src={appwriteService.getFilePreview(featuredImage)} 
              placeholderSrc={appwriteService.getFilePreview(featuredImage)} 
              
              />
            {/* <img loading='lazy' src={appwriteService.getFilePreview(featuredImage)} alt={title} className=' rounded-xl h-64 w-64'/> */}
            </div>
            <h2 className=' text-xl font-bold dark:text-white'>{title}</h2>
            {/* <p className=' font-bold dark:text-white'>Created By:</p>
            <h2 className='font-bold dark:text-white'>{userData.name}</h2> */}
        </div>
    </Link>
  )
}

export default PostCard