import React, { useState } from 'react'
import { Button, Alert } from 'danger-ui'

const ButtonComponent = () => {
  const [alertVisible, setAlertVisible] = useState(false)
  const [alertPosition, setAlertPosition] = useState('top-center')

  const triggerAlert = (position = 'top-center') => {
    setAlertPosition(position)
    setAlertVisible(true)
    setTimeout(() => {
      setAlertVisible(false)
    }, 5000)
  }

  return (
    <div>
      <h2>Alert</h2>
      <Alert visible={alertVisible} position={alertPosition}>
        This is a text
      </Alert>
      <Button onClick={() => triggerAlert('top-left')}>Top left</Button>
      <Button onClick={() => triggerAlert('top-center')}>Top center</Button>
      <Button onClick={() => triggerAlert('top-right')}>Top right</Button>
      <Button onClick={() => triggerAlert('bottom-left')}>Bottom left</Button>
      <Button onClick={() => triggerAlert('bottom-center')}>
        Bottom center
      </Button>
      <Button onClick={() => triggerAlert('bottom-right')}>Bottom right</Button>
    </div>
  )
}

export default ButtonComponent
