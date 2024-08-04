import React ,{ useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import { Footer, Header } from './components'
import {Outlet} from 'react-router-dom'
import { Toaster} from 'sonner'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])
  
  return !loading ? (
      <div className=' min-h-screen flex flex-wrap content-between bg-gray-300 dark:bg-gray-700'>
        <div className='w-full block'>
          <Header/>
            <main className=' bg-gray-300 dark:bg-gray-700'>
              <Toaster position="bottom-right" expand={true} richColors />
              <Outlet/>
            </main>
          <Footer/>
        </div>
      </div>
  ) : null
}

export default App
