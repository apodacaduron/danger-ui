import React, { FC } from 'react'
import { ChildrenProps } from 'utils/interfaces'

import './FormGroup.sass'

const FormGroup: FC<ChildrenProps> = ({ children }) => {
  return <div className='dg-form-group'>{children}</div>
}

export default FormGroup
