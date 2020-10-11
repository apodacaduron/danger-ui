import React from 'react'
import Nav from '../../components/nav/Nav'
import Heading from '../../components/heading/Heading'
import Introduction from '../../components/sections/Introduction'
import InputComponent from '../../components/sections/Input'
import TableComponent from '../../components/sections/Table'
import SpinnerComponent from '../../components/sections/Spinner'
import ButtonComponent from '../../components/sections/Button'

import './Landing.css'

const Landing = () => {
  return (
    <div>
      <Nav />
      <Heading />
      <div id='sections'>
        <Introduction />
        <InputComponent />
        <TableComponent />
        <SpinnerComponent />
        <ButtonComponent />
      </div>
    </div>
  )
}

export default Landing
