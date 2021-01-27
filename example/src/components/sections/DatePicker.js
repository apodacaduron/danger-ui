import React from 'react'
import { Calendar, DatePicker, RangeDatePicker } from 'danger-ui'

const TabsComponent = () => {
  return (
    <div>
      <h2>Date Picker</h2>
      <Calendar />
      <br />
      <DatePicker />
      <br />
      <RangeDatePicker />
      <br />
    </div>
  )
}

export default TabsComponent
