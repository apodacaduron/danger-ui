import React from 'react'
import Nav from '../../components/nav/Nav'
import Heading from '../../components/heading/Heading'
import Introduction from '../../components/sections/Introduction'

import './Landing.css'

const Landing = () => {
  return (
    <div>
      <Nav />
      <Heading />
      <div id='sections'>
        <Introduction />
      </div>
    </div>
  )
}

export default Landing
