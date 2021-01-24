import React from 'react'
import Heading from '../../components/heading/Heading'
import Introduction from '../../components/sections/Introduction'
import InputComponent from '../../components/sections/Input'
import TableComponent from '../../components/sections/Table'
import SpinnerComponent from '../../components/sections/Spinner'
import ButtonComponent from '../../components/sections/Button'
import AvatarComponent from '../../components/sections/Avatar'
import AlertComponent from '../../components/sections/Alert'
import BadgeComponent from '../../components/sections/Badge'
import SelectComponent from '../../components/sections/Select'
import TextEditorComponent from '../../components/sections/TextEditor'
import TabsComponent from '../../components/sections/Tabs'
import DatePickerComponent from '../../components/sections/DatePicker'
import DropdownMenuComponent from '../../components/sections/DropdownMenu'
import ExpandableComponent from '../../components/sections/Expandable'

import './Landing.css'

const Landing = () => {
  return (
    <div id='main-container'>
      <Heading />
      <div id='sections'>
        <Introduction />
        <InputComponent />
        <TableComponent />
        <SpinnerComponent />
        <ButtonComponent />
        <AlertComponent />
        <AvatarComponent />
        <BadgeComponent />
        <SelectComponent />
        <TextEditorComponent />
        <TabsComponent />
        <DatePickerComponent />
        <DropdownMenuComponent />
        <ExpandableComponent />
      </div>
    </div>
  )
}

export default Landing
