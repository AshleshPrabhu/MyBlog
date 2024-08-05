import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
// Protected component that redirects users to login or homepage based on authentication status and props.
export default function Protected({children,authentication=true}) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state=>state.auth.status)
    
    useEffect(()=>{
        if(authentication && authStatus!==authentication){
            navigate("/login")
        }else if(!authentication && authStatus!==authentication){
            navigate('/')
        }
        setLoader(false)
    },[authStatus,navigate,authentication])

    return loader ? <div>Loading ... </div> : <>{children}</>
}
