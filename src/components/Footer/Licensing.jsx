import React from 'react'
import Logo from '../Logo'

function Licensing() {
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
                <h2 className="text-center text-2xl font-bold leading-tight">Licensing</h2>
                <br />
                <div className="mt-2 text-center text-base text-black60 flex flex-col justify-start items-start">
                    <p>&nbsp;* Last updated: 20/7/2024<br/></p>
                    <p>&nbsp;*The content on MyBlog is currently not licensed<br/></p>
                    <p>*If you have  questions about the licensing of our content,<br/></p>
                    <p> please contact us at contact us section.</p>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Licensing