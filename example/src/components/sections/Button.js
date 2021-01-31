import React from 'react'
import { Button } from 'danger-ui'

const ButtonComponent = () => {
  return (
    <div>
      <h2>Button</h2>
      <Button>Regular</Button>
      <Button loading={true}>Loading</Button>
      <Button design='transparent'>Transparent</Button>
      <Button design='light'>Light</Button>
      <Button design='border'>Border</Button>
    </div>
  )
}

export default ButtonComponent
