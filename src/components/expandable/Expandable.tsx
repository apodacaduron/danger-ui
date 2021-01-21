import React, { FC } from 'react'
import Collapsible, { CollapsibleProps } from 'react-collapsible'

import './Expandable.sass'

const Expandable: FC<CollapsibleProps> = ({ children, ...props }) => {
  return (
    <Collapsible
      {...props}
      transitionTime={200}
      easing='ease-in-out'
      classParentString='dgr-expandable'
      triggerTagName='div'
    >
      {children}
    </Collapsible>
  )
}

export default Expandable
