import React from 'react'
import authService from '../appwrite/auth'

function GoogleLogin() {
   const handleLogin = () => {
    authService.googleLogin()
   }

  return (
    <button onClick={handleLogin} className='px-4 py-2 rounded-lg'>
        Login with Google
    </button>
  )
}

export default GoogleLogin