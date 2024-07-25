import React from 'react'
import Logo from '../Logo'

function Privacy() {
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
                <h2 className="text-center text-2xl font-bold leading-tight">Privacy Policy</h2>
                <br />
                <div className="mt-2 text-center text-base text-black flex flex-col justify-start items-start">
                    <p>Last updated:20/7/2024</p>
                    <br />
                    <p>"we" are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit our website.</p>
                    <br />
                    <p>1. Information We Collect : Personal Information: When you sign up for our website we may collect personal information such as your name, email address, and any other information you provide.<br/>
                    Usage Data: We automatically collect information about your visit to the Site, such as your IP address, browser type, operating system, and pages viewed.
                    </p>
                    <br />
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. How We Use Your Information : To provide, maintain, and improve the Site.To send you newsletters, updates.</p>
                    <br />
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  3. Sharing Your Information : We do not sell or rent your personal information to third parties.We may disclose your information if required by law or to protect our rights.</p>
                    <br />
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;4. Security We use reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
                    <br />
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;5. Your Rights : You have the right to access, correct, or delete your personal information. You can contact us through contact us page to exercise these rights.</p>
                    <br />
                    <p> 6. Changes to This Privacy Policy : We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                    <br />
                    <p> &nbsp;&nbsp;&nbsp;7. Contact Us  :  If you have any questions about this Privacy Policy, please contact us at contact us page</p>
                </div>
            </div>
    
        </div>
    )
}

export default Privacy