import React from 'react'
import { Tooltip, Badge } from 'danger-ui'

const TooltipComponent = () => {
  return (
    <div>
      <h2>Tooltip</h2>
      <Tooltip effect='solid' />
      <span data-tip='tooltip' data-place='top'>
        Position top
      </span>
      <br />
      <span data-tip='tooltip' data-place='left'>
        Position left
      </span>
      <br />
      <span data-tip='tooltip' data-place='right'>
        Position right
      </span>
      <br />
      <span data-tip='tooltip' data-place='bottom'>
        Position bottom
      </span>
    </div>
  )
}

export default TooltipComponent
