import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <section className="relative overflow-hidden py-10  border-t-2 border-t-black bg-gray-300 dark:bg-gray-700 dark:border-t-2 dark:border-white">
                <div className="relative z-10 mx-auto max-w-7xl px-4">
                    <div className="-m-6 flex flex-wrap flex-col  md:flex-row">
                        <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                            <div className="flex h-full flex-col md:justify-between justify-center items-center lg:items-start  ">
                                <div className="mb-4 inline-flex items-center">
                                <Link to='/'>
                                    <Logo width='100px'/>
                                </Link>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">
                                        &copy; Copyright 2023. All Rights Reserved by DevUI.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-6 md:w-1/2 lg:w-2/12 ">
                            <div className="h-full flex flex-col items-center lg:items-start">
                                <h3 className=" w-[124.03px] tracking-px mb-9  text-xs font-semibold uppercase text-gray-500 dark:text-gray-300">
                                    Company
                                </h3>
                                <ul className='flex flex-col items center lg:items-start '>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
                                            to="/features"
                                        >
                                            Features
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
                                            to="/pricing"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
                                            to="/affiliate"
                                        >
                                            Affiliate Program
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link
                                            className=" text-base font-medium hover:text-gray-500 dark:text-white dark:hover:text-gray-700"
                                            to="/"
                                        >
                                            Press Kit
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                            <div className="h-full flex flex-col items-center lg:items-start">
                                <h3 className=" w-[78.81px] tracking-px mb-9  text-xs font-semibold uppercase text-gray-500 dark:text-gray-300">
                                    Support
                                </h3>
                                <ul className='flex flex-col items center lg:items-start'>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
                                            to="/account"
                                        >
                                            Account
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
                                            to="/help"
                                        >
                                            Help
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
                                            to="/contact"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                            <div className="h-full flex flex-col items-center lg:items-start">
                                <h3 className=" w-[78.81px] tracking-px mb-9  text-xs font-semibold uppercase text-gray-500 dark:text-gray-300">
                                    Legals
                                </h3>
                                <ul className='flex flex-col items center lg:items-start'>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
                                            to="/terms"
                                        >
                                            Terms &amp; Conditions
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
                                            to="/privacy"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className=" text-base font-medium hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
                                            to="/license"
                                        >
                                            Licensing
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
)
}

export default Footer