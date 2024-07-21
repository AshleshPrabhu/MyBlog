import React from 'react'

function Container({children},className='') {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 bg-gray-300 dark:bg-gray-700 ${className}`}>{children}</div>
  )
}

export default Container