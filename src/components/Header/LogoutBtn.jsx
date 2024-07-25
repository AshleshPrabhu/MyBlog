import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import {useNavigate} from 'react-router-dom'
import { toast } from 'sonner'

function LogoutBtn() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const logoutHandler=()=>{
    authService.logout().then(()=>{
      dispatch(logout());
      toast.success('Logged out successfully');
      navigate('/login');
    })
  }
  return (
    <button onClick={logoutHandler} className='inline-bock px-6 py-2 -mt-3 duration-200 hover:bg-blue-300 rounded-full dark:text-white dark:hover:text-gray-600'>Logout</button>
  )
}

export default LogoutBtn