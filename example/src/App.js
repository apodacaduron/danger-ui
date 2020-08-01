import React from 'react'

import { Button, Input, Avatar } from 'danger-ui'
import 'danger-ui/dist/index.css'

const App = () => {
  const print = () => console.log('test')
  const printInputValue = (e) => console.log(e.target.value)
  return (
    <div>
      <Button design='regular' onClick={print}>
        Iniciar Sesión
      </Button>
      <Input
        placeholder='Email'
        onChange={printInputValue}
        danger={true}
        dangerText='This is required'
      />
      <Avatar />
    </div>
  )
}

export default App
