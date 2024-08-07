import { useState } from 'react'
import React from 'react'
import {Button,Input,Logo} from '../../components/index'
import {useForm} from 'react-hook-form'
import authService from '../../appwrite/auth'
import { toast } from 'sonner'

function ForgotPassword() {
    const {register,handleSubmit} = useForm();
    const [error, setError] = useState("")

    const login =async(data)=>{
        setError("")
        try{
            const Data ={email:data.email,url:'my-blog-ashlesh.vercel.app/reset-password'}
            toast.success("Email has been sent. Please check it")
            await authService.passwordRecovery(Data)
        }catch(error){
            setError(error.message)
        }
    }

    return (
        <div
            className='flex items-center justify-center w-full'
        >  
        <div className={`mx-auto w-full max-w-lg bg-gray-400 rounded-xl p-10 border border-black/10 `}>
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Enter your email to change password</h2>
            {error && <p className="text-center text-red-600 mt-8 ">{error}</p> }
            <form onSubmit={handleSubmit(login)} className=' mt-8'>
                <div className=' space-y-5'>
                    <Input
                        label="Email: "
                        placeholder="Enter your email"
                        extraclass="hidden"
                        type="email"
                        {...register("email",{
                            required:true,
                            validate:{
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                    />

                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Reset Password
                    </Button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default ForgotPassword