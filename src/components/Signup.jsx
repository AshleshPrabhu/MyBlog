import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {login } from '../store/authSlice'
import {Button,Input,Logo} from './index.js'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'
import { toast } from 'sonner'
import appwriteService from '../appwrite/config'

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register,handleSubmit} = useForm();
    const [error, setError] = useState("");

    const create = async(data)=>{
        setError("")
        if(data.password==data.againpassword){
            try{
                const userData = await authService.createAccount(data)
                if (userData) {
                    const userdata = await authService.getCurrentUser();
                    if (userdata) {
                        const response = await appwriteService.saveUser({userId:userdata.$id,userName:userdata.name,userEmail:userdata.email})
                        if(response){
                            dispatch(login({userdata}))
                            toast.success("Account created successfully")
                        }
                        else{
                            setError("Failed to save user")
                        }
                        
                    }
                    navigate("/");
                }
                else{
                    toast.error("Failed to create account")
                    setError("Invalid email or password")
                }
            }catch(error){
                setError(error.message)
            }
        }
        else{
            setError("Password does not match")
            toast.error("password doesnt match")
        }
    }
    return (
    <div className="flex items-center justify-center bg-gray-300 dark:bg-gray-700">
        <div className={`mx-auto w-full max-w-lg bg-gray-400 rounded-xl p-10 border border-black/10 `}>
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
            </div>

            <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                Already have an account?&nbsp;
                <Link
                    to="/login"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign In
                </Link>
            </p>

            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

            <form onSubmit={handleSubmit(create)}>
                <div className=' space-y-5'>
                    <Input
                            label="Full Name: " 
                        extraclass="hidden"
                        placeholder="Enter your full name"
                        {...register("name",{
                            required:true,
                        })}
                    />

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

                    <Input
                        label="Password: "
                        placeholder="Enter your password"
                        className="rounded-br-none rounded-tr-none"
                        type="password"
                        {...register("password",{
                            required:true,
                        })}
                    />

                    <Input
                        label="Re enter password: "
                        placeholder="Enter your password again"
                        className="rounded-br-none rounded-tr-none"
                        type="password"
                        {...register("againpassword",{
                            required:true,
                        })}
                    />
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Create Account
                    </Button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Signup