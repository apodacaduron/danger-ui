import React from 'react'
import Logo from '../../assets/danger-logo.svg'

import './Heading.css'

const Heading = () => {
  return (
    <div id='heading'>
      <img src={Logo} alt='Danger UI logo' />
      <div className='fade'></div>
    </div>
  )
}

export default Heading
