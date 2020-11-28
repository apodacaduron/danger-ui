import React from 'react'
import { Select } from 'danger-ui'

const SelectComponent = () => {
  return (
    <div>
      <h2>Select</h2>
      <Select
        danger={false}
        dangerText='This is required'
        id='role'
        value='doctor'
        data={[
          { option: 'Psychologist', value: 'psychologist' },
          { option: 'Doctor', value: 'doctor' }
        ]}
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  )
}

export default SelectComponent
