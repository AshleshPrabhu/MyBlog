import React from 'react'

function ThemeMode({classadd}) {
    const handleTheme = () => {
        const body = document.querySelector('body');
        body.classList.toggle('dark');
        if(body.classList.contains('dark')){
            document.getElementById('icon').classList.remove('fa-moon')
            document.getElementById('icon').classList.add('fa-sun')
            document.getElementById('icon').classList.remove("text-black")
            document.getElementById('icon').classList.add("text-white")
        }
        else{
            document.getElementById('icon').classList.remove('fa-sun')
            document.getElementById('icon').classList.add('fa-moon')
            document.getElementById('icon').classList.remove("text-white")
            document.getElementById('icon').classList.add( "text-black")
        }
    }
    return (
    <div className=' rounded-xl'>
        <button id='btn' className={`w-full ml-0 mb-5 `} onClick={handleTheme}>
            <i id='icon' className="fa-solid fa-moon text-black" />
        </button>
    </div>
    )
}

export default ThemeMode