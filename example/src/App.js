import React, { useState } from 'react'

import {
  Button,
  Input,
  Avatar,
  Table,
  Badge,
  Select,
  Alert,
  Modal,
  FormGroup
} from 'danger-ui'
import 'danger-ui/dist/index.css'

const App = () => {
  const [alertVisible, setAlertVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => setModalVisible(!modalVisible)
  const toggleAlert = () => setAlertVisible(!alertVisible)
  const printInputValue = (e) => {
    console.log(e.target.value)
  }
  const printSelectValue = (e) => {
    console.log(e.target.value)
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
    display: 'table-cell',
    padding: '8px 16px'
  }

  const rowStyle = { display: 'table-row', borderTop: '1px solid #cccccc' }

  return (
    <div>
      <Button type='submit' loading={true}>
        Iniciar Sesión
      </Button>
      <Button onClick={toggleAlert}>Activar Alerta</Button>
      <FormGroup>
        <Input placeholder='Email' onChange={printInputValue} />
      </FormGroup>
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
                return (
                  <div key={columnIndex} style={cellStyle}>
                    {row[column]}
                  </div>
                )
              })}
            </div>
          )
        })}
      />
      <Badge text='Hey bro' />
      <FormGroup>
        <Select
          value='doctor'
          data={[
            { option: 'Psychologist', value: 'psychologist' },
            { option: 'Doctor', value: 'doctor' }
          ]}
          onChange={printSelectValue}
        />
      </FormGroup>
      <Select
        danger={true}
        dangerText='This is required'
        id='role'
        value='doctor'
        data={[
          { option: 'Psychologist', value: 'psychologist' },
          { option: 'Doctor', value: 'doctor' }
        ]}
        onChange={printSelectValue}
      />

      <Alert visible={alertVisible}>Registered Successfully</Alert>
      <Button onClick={toggleModal}>Open Modal</Button>
      <Modal
        visible={modalVisible}
        onClickOut={toggleModal}
        header='Customers'
        footer={<Button onClick={toggleModal}>OK</Button>}
      ></Modal>
    </div>
  )
}

export default App
