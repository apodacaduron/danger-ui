import React, { useState } from 'react'
import { Button, Alert } from 'danger-ui'

const ButtonComponent = () => {
  const [alertVisible, setAlertVisible] = useState(false)
  return (
    <div>
      <h2>Alert</h2>
      <Alert visible={alertVisible}>This is a text</Alert>
      <Button onClick={() => setAlertVisible(!alertVisible)}>Top Left</Button>
    </div>
  )
}

export default ButtonComponent
