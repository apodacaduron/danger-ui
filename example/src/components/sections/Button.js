import React from 'react'
import { Button } from 'danger-ui'

const ButtonComponent = () => {
  return (
    <div>
      <h2>Button</h2>
      <Button>Regular</Button>
      <Button loading={true}>Loading</Button>
    </div>
  )
}

export default ButtonComponent
