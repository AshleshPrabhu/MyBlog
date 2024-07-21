import React from 'react'
import Logo from '../Logo'

function Features() {
    return (
        <div
        className='flex items-center justify-center w-full bg-gray-300 dark:bg-gray-700'
        >  
            <div className={`mx-auto w-full max-w-lg bg-gray-400 rounded-xl p-10 border border-black/10 `}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <br/>

                <h2 className="text-center text-2xl font-bold leading-tight">Features we provide:</h2>
                <br/>
                
                <div className="mt-2 text-center flex flex-col text-base text-black justify-start items-start">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Add,Edit,Delete post <br /></p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. View others Post <br /></p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Login for current user and Sign up for new user<br /></p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. In post the user can add the title, <br /></p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;images (from their device) and content of the post. </p>
                </div>
            </div>
        
        </div>
      )
}

export default Features