import React from 'react'
import Logo from '../Logo'


function Account() {

    return (
        <div
        className='flex items-center justify-center w-full bg-gray-300 dark:bg-gray-700'
        >  
            <div className={`mx-auto w-full h-96 max-w-lg bg-gray-400 rounded-xl p-10 border border-black/10 `}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <br/>

                <h2 className="text-center text-2xl font-bold leading-tight">Account</h2>
                <br/>
                
                <p className="mt-2 text-center text-base text-black">
                    <br/>
                    &nbsp;User can only login to their account and make changes. 
                    <br/>
                    You cant view others account.
                    <br/>
                </p>
            </div>
        
        </div>
      )
}

export default Account