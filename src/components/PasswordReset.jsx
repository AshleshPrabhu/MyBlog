import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import {Button,Input,Logo} from '../components/index'
import authService from '../appwrite/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useParams} from 'react-router-dom'
import { login } from '../store/authSlice'
import { toast } from 'sonner'



function PasswordReset() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {register,handleSubmit} = useForm();
    const [error, setError] = useState("")

    // const {userId,secret} =useParams()
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("userId");
    const secret = urlParams.get("secret");
    const login =async(data)=>{
        setError("")
        if(data.AgainPassword.length<8 || data.NewPassword.length<8){
            setError("Password must be at least 8 characters long")
            toast.error("Password must be at least 8 characters long")
        }

        try{
            if(data.NewPassword !== data.AgainPassword){
                setError("Password does not match")
                return
            }else{
                const Data={userId,secret,password:data.NewPassword, newpassword:data.AgainPassword}
                const session = await authService.resetPassword(Data)
                if(session){
                    toast.success("Password reset successfully")
                    navigate("/login")
                }else{
                    toast.error("Failed to reset password")
                    setError("Failed to reset password")
                }
            }
        }
        catch(error){

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
            <h2 className="text-center text-2xl font-bold leading-tight">Enter your details</h2>
            {error && <p className="text-center text-red-600 mt-8 ">{error}</p> }
            <form onSubmit={handleSubmit(login)} className=' mt-8'>
                <div className=' space-y-5'>
                {/* <Input
                    label="OldPassword: "
                    placeholder="Enter your old password"
                    type="password"
                    {...register("Password",{
                        required:true,
                    })}
                /> */}

                <Input
                    label="NewPassword: "
                    placeholder="Enter your password"
                    type="password"
                    {...register("NewPassword",{
                        required:true,
                    })}
                />
                <Input
                    label="Re enter password : "
                    placeholder="Enter your password again"
                    type="password"
                    {...register("AgainPassword",{
                        required:true,
                    })}
                />
                    
                    



                    <Button
                    type="submit"
                    className="w-full"
                    >
                        Change Password
                    </Button>
                </div>
            </form>
        </div>
    
    </div>
  )
}

export default PasswordReset