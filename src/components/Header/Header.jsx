import React,{useState} from 'react'
import {Container,Logo,LogoutBtn} from "../index"
import { Link ,NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ThemeMode from '../ThemeMode'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navigate=useNavigate();
  const authStatus=useSelector((state)=>state.auth.status)
  const [btnOpen, setBtnOpen] = useState(false);
  const toggle = () => {
    setBtnOpen(!btnOpen);
  };
  // <div className='md:hidden block cursor-pointer w-10'><i class="fa-solid fa-bars w-10 h-5"></i></div>
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
        <nav className='flex bg-gray-300  dark:bg-gray-700 items-center justify-between md:items-end md:justify-between'>
        <div className='md:hidden block cursor-pointer'>
            {btnOpen ? null : (
              <button onClick={toggle} className="lg:hidden">
                <FontAwesomeIcon icon={faBars} className="text-[1.5rem] dark:text-white" />
              </button>
            )}
        </div>
        
          <div className=' mr-4 bg-gray-300  dark:bg-gray-700 right-1 relative  '>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
          </div>
          <ul className='md:flex ml-auto bg-gray-300  dark:bg-gray-700 relative hidden'>
            {
              navItems.map((item)=>
              item.active?(
                <li key={item.name}>
                  <NavLink
                    to={`${item.slug}`}
                    className={({isActive})=>`inline-bock px-6 py-2 ${isActive ? " text-orange-700" : " text-gray-600 dark:text-gray-100"} duration-200 hover:bg-blue-300 rounded-full dark:hover:text-gray-600 `}
                  >{item.name}
                  </NavLink>
                </li>
              ):null
              )
            } 
            {authStatus&&(
              <li >
                <LogoutBtn className={"dark:text-white dark:hover:text-gray-600"} />
              </li>
            )}
            <li className=' ml-4 relative group'>
              <ThemeMode classadd={"bg-gray-300  dark:bg-gray-700"} />
              <div id='hoverelement' className=' hidden group-hover:block'>
                <div className=' w-32 h-5 text-white bg-gray-600 p-3 flex justify-center items-center absolute z-0 -bottom-1 -right-12 rounded-xl '>
                  <p>change theme</p>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </Container>
      {btnOpen && (
        <ul className='flex flex-col gap-8 justify-start pt-[30%] mx-auto items-center h-screen w-[40%] fixed top-0 bg-slate-500 z-50'>
            <button onClick={toggle} className="lg:hidden">
              <FontAwesomeIcon icon={faX} className="text-[1.5rem] dark:text-white" />
            </button>
            {
              navItems.map((item)=>
              item.active?(
                <li key={item.name}>
                  <NavLink
                    to={`${item.slug}`}
                    className={({isActive})=>`inline-bock px-6 py-2 ${isActive ? " text-orange-700" : "text-gray-100"} duration-200 hover:bg-blue-300 rounded-full dark:hover:text-gray-600 `}
                  >{item.name}
                  </NavLink>
                </li>
              ):null
              )
            } 
            {authStatus&&(
              <li >
                <LogoutBtn className={"text-gray-100"}/>
              </li>
            )}
            <li className=' ml-4 relative group'>
              <ThemeMode classadd={"bg-gray-300  dark:bg-gray-700"} />
              <div id='hoverelement' className=' hidden group-hover:block'>
                <div className=' w-32 h-5 text-white bg-gray-600 p-3 flex justify-center items-center absolute z-0 -bottom-1 -right-12 rounded-xl '>
                  <p>change theme</p>
                </div>
              </div>
            </li>
            <div className=' mr-4 bg-gray-300  dark:bg-gray-700  top-10 right-auto left-auto absolute'>
              <Link to='/'>
                <Logo width='70px'/>
              </Link>
            </div>
        </ul>
      )}
    </header>
  )
}


export default Header