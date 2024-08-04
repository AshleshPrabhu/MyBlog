import React,{useId} from 'react'
// reusable input component
const Input = React.forwardRef( function Input({
    label,
    type="text",
    className="",
    extraclass="",
    ...props
},ref){
    const id = useId();
    const id2=useId()
    const handleClick=()=>{
        const password = document.getElementById(id)
        const icon = document.getElementById(id2)
        if (password.type=="password") {
            password.type="text"
            icon.classList.remove("fa-eye")
            icon.classList.add("fa-eye-slash")
        }else{
            password.type="password"
            icon.classList.remove("fa-eye-slash")
            icon.classList.add("fa-eye")
        }
    }
    return(
        <div className='w-full'>
            {label && 
            <label 
            className=' inline-block mb-1 pl-1 dark:text-white'
            htmlFor={id}
            >
                {label}
            </label>}
            <div className='flex'>

            <input
            type={type}
            className={`px-3 py-2 rounded-lg  bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
            <div  className={` ${extraclass} flex items-center justify-center bg-white rounded-lg rounded-tl-none rounded-bl-none border-l-0 cursor-pointer` }onClick={handleClick}>
                <i id={id2} className="fa-solid fa-eye  text-gray"/>
            </div>
            </div>
        </div>
    )
})

export default Input