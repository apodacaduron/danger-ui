import React from 'react'
import { Expandable } from 'danger-ui'

const ExpandableComponent = () => {
  return (
    <div>
      <h2>Expandable</h2>
      <Expandable trigger={<div>Click here to expand</div>}>Yeah</Expandable>
    </div>
  )
}

export default ExpandableComponent
