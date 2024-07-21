import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

function Help() {
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
            <h2 className="text-center text-2xl font-bold leading-tight">Help?</h2>
            <div className="mt-2 text-center text-base text-black justify-start items-start flex flex-col">
                <p>1. If you dont find edit and delete option for your post please consider to reload the webpage.
                <br/></p>
                <p>&nbsp;&nbsp;2. If you find problem to add post please consider to reload the webpage.
                <br/></p>
                <br />
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Problem not resolved? 
                <Link 
                className=" text-base font-medium hover:text-gray-500 dark:text-white dark:hover:text-gray-700"
                to={"/contact"}
                >
                    Contact Us
                </Link></p>
            </div>
        </div>
    
    </div>
  )
}

export default Help