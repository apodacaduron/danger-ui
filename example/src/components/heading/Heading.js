import React from 'react'
import Heart from '../../assets/heart.svg'

import './Heading.css'

const Heading = () => {
  return (
    <div id='heading'>
      <div className='text'>
        <h1>We love thick paddings</h1>
        <p>Hey, it's time to get started, all the docs are down below.</p>
        <span>Have fun!</span>
      </div>
      <img className='heart-image' src={Heart} alt='heart' />
    </div>
  )
}

export default Heading
