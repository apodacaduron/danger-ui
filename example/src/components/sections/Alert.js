import React from 'react'
import { Button, ToastContainer, toast } from 'danger-ui'

const ButtonComponent = () => {
  const triggerAlert = (position) => {
    toast.success(position, {
      position
    })
  }

  return (
    <div>
      <h2>Alert</h2>
      <ToastContainer />
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
