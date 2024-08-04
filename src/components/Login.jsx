import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button,Input,Logo} from './index'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'
import { toast } from 'sonner'

// handleSubmit comes from useForm to which we are sending the function that we want to execute after submitting the form 
// now we dont want to manage state for input field and all it will automatically manage. it refers to handle submit

// {...register("email")} ... is required . If we wont put ... then everytime we use input component the values will overwrite . here email is the name given

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register,handleSubmit} = useForm();
    const [error, setError] = useState("")

    // await dispatch(authLogin(data)).unwrap();
    // navigate("/") -> under if(userData)
    const login =async(data)=>{
        setError("")
        try{
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData){ 
                    dispatch(authLogin({userData}))
                    toast.success("Logged in successfully")
                }
                navigate("/")
            }
            else{
                toast.error("Failed to login")
                setError("Invalid email or password")
            }
        }catch(err){
            setError(err.message)
        }
    }
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
            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                Don&apos;t have any account?&nbsp;
                <Link
                    to="/signup"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign Up
                </Link>
            </p>
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

                    <Input
                    label="Password: "
                    className="rounded-br-none rounded-tr-none"
                    placeholder="Enter your password"
                    type="password"
                    {...register("password",{
                        required:true,
                    })}
                    />
                    <div className="flex items-center justify-between">
                    <Link to="/forgot-password">
                        <p className="text-sm font-medium text-primary hover:underline dark:text-white ">
                            Forgot password ?
                        </p>
                    </Link>
                    </div>
                    <Button
                    type="submit"
                    className="w-full"
                    >
                        Sign In
                    </Button>
                    {/* <div className="text-center">Or</div>
                    <GoogleLogin/> */}


                </div>
            </form>
        </div>
    
    </div>
  )
}

export default Login