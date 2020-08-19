import React from 'react'

import { Button, Input, Avatar, Table, Badge, Select } from 'danger-ui'
import 'danger-ui/dist/index.css'

const App = () => {
  const print = () => console.log('test')
  const printInputValue = (e) => {
    console.log(e.target.value)
  }
  const printSelectValue = (value) => {
    console.log(value)
  }
  const columns = ['name', 'age', 'occupation', 'email']
  const data = [
    {
      name: 'Daniel',
      age: 23,
      occupation: 'Developer',
      email: 'apodacaduron@gmail.com'
    }
  ]

  const cellStyle = {
    display: 'table-cell', padding: '8px 16px'
  }

  const rowStyle = { display: 'table-row', borderTop: '1px solid #cccccc' }

  return (
    <div>
      <Button design='regular' onClick={print}>
        Iniciar Sesión
      </Button>
      <Input placeholder='Email' onChange={printInputValue} />
      <Input
        placeholder='Email'
        onChange={printInputValue}
        danger={true}
        dangerText='This is required'
      />
      <Avatar />
      <Table
        columns={columns}
        body={data.map((row, rowIndex) => {
          return (
            <div key={rowIndex} style={rowStyle}>
              {columns.map((column, columnIndex) => {
                return <div key={columnIndex} style={cellStyle}>
                  {row[column]}
                </div>
              })}
            </div>
          )
        })}
      />
      <Badge text="Hey bro" />
      <Select value="doctor" data={[{ option: 'Psychologist', value: 'psychologist' }, { option: 'Doctor', value: 'doctor' }]} onChange={printSelectValue} />
      <Select danger={true}
        dangerText='This is required'
        value="doctor" data={[{ option: 'Psychologist', value: 'psychologist' }, { option: 'Doctor', value: 'doctor' }]} onChange={printSelectValue} />
    </div>
  )
}

export default App
