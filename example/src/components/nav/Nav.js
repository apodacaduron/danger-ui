import React from 'react'
import logo from '../../assets/danger-logo.svg'

import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <div className='nav-left'></div>
      <div className='nav-center'>
        <img className='nav-logo' src={logo} alt='Logo' />
      </div>
      <div className='nav-right'></div>
    </nav>
  )
}

export default Nav
