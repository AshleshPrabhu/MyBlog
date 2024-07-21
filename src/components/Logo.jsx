import React from 'react'
import logo from '../assets/logo.svg'

function Logo({width ='100px'}) {
  return (
    <div>
      <img width={width} src={logo} alt="logo" />
    </div>
  )
}

export default Logo