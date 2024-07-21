import React from 'react'
import { Container,PostForm } from '../components'

function AddPost() {
  return (
    <div className=' py-8 bg-gray-300 dark:bg-gray-700'>
        <Container>
            <PostForm/> 
        </Container>
    </div>
  )
}

export default AddPost