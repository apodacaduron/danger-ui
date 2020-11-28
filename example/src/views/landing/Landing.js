import React from 'react'
import Nav from '../../components/nav/Nav'
import Heading from '../../components/heading/Heading'
import Introduction from '../../components/sections/Introduction'
import InputComponent from '../../components/sections/Input'
import TableComponent from '../../components/sections/Table'
import SpinnerComponent from '../../components/sections/Spinner'
import ButtonComponent from '../../components/sections/Button'
import AvatarComponent from '../../components/sections/Avatar'
import BadgeComponent from '../../components/sections/Badge'
import SelectComponent from '../../components/sections/Select'

import './Landing.css'

const Landing = () => {
  return (
    <div id='main-container'>
      <Nav />
      <Heading />
      <div id='sections'>
        <Introduction />
        <InputComponent />
        <TableComponent />
        <SpinnerComponent />
        <ButtonComponent />
        <AvatarComponent />
        <BadgeComponent />
        <SelectComponent />
      </div>
    </div>
  )
}

export default Landing
