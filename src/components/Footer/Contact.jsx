import React from 'react'
import Logo from '../Logo'

function Contact() {
    return (
        <div
        className='flex items-center justify-center w-full bg-gray-300 dark:bg-gray-700'
        >  
            <div className={`mx-auto h-96 w-full max-w-lg bg-gray-400 rounded-xl p-10 border border-black/10 `}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <br/>
                <h2 className="text-center text-2xl font-bold leading-tight">Contact Us</h2>
                <br/>
                <br/>
                <p className="mt-2 text-center text-base text-black">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email : abc@gmail.com
                    <br/>
                    phone : 1234567890
                </p>
            </div>
        </div>
    )
}

export default Contact