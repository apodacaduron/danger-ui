import React, { FC } from 'react'
import { ChildrenProps } from 'utils/interfaces'

import './Badge.sass'

const Badge: FC<ChildrenProps> = ({ children }) => {
  return <div className='dg-badge'>{children}</div>
}

export default Badge
