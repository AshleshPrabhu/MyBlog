import React from 'react'
import {Container,Logo,LogoutBtn} from "../index"
import { Link ,NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ThemeMode from '../ThemeMode'

function Header() {
  const navigate=useNavigate();
  const authStatus=useSelector((state)=>state.auth.status)
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className=' py-3 shadow border-b-2 border-b-black bg-gray-300 dark:bg-gray-700 dark:border-b-2 dark:border-white'>
      <Container >
        <nav className='flex bg-gray-300  dark:bg-gray-700'>
          <div className=' mr-4 bg-gray-300  dark:bg-gray-700'>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
          </div>
          <ul className='flex ml-auto bg-gray-300  dark:bg-gray-700 relative'>
            {
              navItems.map((item)=>
              item.active?(
                <li key={item.name}>
                  <NavLink
                    to={`${item.slug}`}
                    className={({isActive})=>`inline-bock px-6 py-2 ${isActive ? " text-orange-700" : " text-gray-600 dark:text-gray-100"} duration-200 hover:bg-blue-300 rounded-full dark:hover:text-gray-600`}
                  >{item.name}
                  </NavLink>
                </li>
              ):null
              )
            } 
            {authStatus&&(
              <li >
                <LogoutBtn />
              </li>
            )}
            <li className=' ml-4 relative group'>
              <ThemeMode />
              <div id='hoverelement' className=' hidden group-hover:block'>
                <div className=' w-32 h-5 text-white bg-gray-600 p-3 flex justify-center items-center absolute z-0 -bottom-1 -right-12 rounded-xl '>
                  <p>change theme</p>
                </div>
              </div>
            </li>
          </ul>
          
        </nav>
      </Container>
    </header>
  )
}


export default Header