import React from 'react'
import { Logo } from '../components'
import { toast } from 'sonner'

function NoElement() {
    toast.error('Please enter a valid URL')
    return (
    <div className='flex flex-col w-full'>
        <div className="flex items-center  justify-center h-screen">
            <div className=' w-6 h-6'>
                <i class="fa-regular fa-face-frown-open fa-beat-fade w-6"/>
            </div>
            <div className='flex items-center justify-center'>
            <Logo/>
            <h1 className="text-3xl font-bold dark:*:text-xl">
                Please enter a valid URL
            </h1>
            </div>
        </div>
    </div>
)
}

export default NoElement