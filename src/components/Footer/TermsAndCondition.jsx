import React from 'react'
import Logo from '../Logo'


function TermsAndCondition() {
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
                <h2 className="text-center text-2xl font-bold leading-tight">Terms and Condition</h2>
                <div className="mt-2 text-center text-base text-black flex flex-col justify-start items-start">
                    <p>Last updated: 20/7/2024</p>
                    <br/>
                    <p>Welcome These terms and conditions outline the rules and regulations for the use of our website</p>
                    <br/>
                    <p>1. Acceptance of Terms : 
                    By accessing and using the Site, you accept and agree to be bound by these terms and conditions.</p>
                    <br/>
                    <p>2. Intellectual Property Rights : 
                    The content on the Site, including text, images, graphics, and logos, is the intellectual property  and protected by applicable copyright laws.</p>
                    <br/>
                    <p>3. User Conduct : 
                    You agree not to use the Site for any unlawful purpose or in any way that could harm the Site or its users.
                    You must not post any content that is offensive, defamatory, or infringes on the rights of others.</p>
                    <br/>
                    <p> 4. Limitation of Liability : 
                    MyBlog will not be liable for any damages arising from the use of or inability to use the Site or its content.</p>
                    <br/>
                    <p>5. Modifications to the Site : 
                    We reserve the right to modify or discontinue the Site at any time without notice.</p>
                    <br/>
                    <p>6. Governing Law : 
                    These terms and conditions are governed by and construed in accordance with the laws of India</p>
                    <br/>
                    <p>7. Contact Us : 
                    If you have any questions about these terms and conditions, please contact us at contact us webpage.</p>
                    <br/>
                </div>
            </div>
        
        </div>
      )
}

export default TermsAndCondition