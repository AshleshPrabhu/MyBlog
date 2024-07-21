import React from 'react'
import Logo from '../Logo'


function Pricing() {
  
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
                <br />
                <h2 className="text-center text-2xl font-bold leading-tight">Pricing</h2>
                <br />
                <p className="mt-2 text-center text-base text-black">
                    MyBlog website is free to use. You can edit and delete your post as per your requirement.
                </p>
                <br />
            </div>
        
        </div>
      )
}

export default Pricing