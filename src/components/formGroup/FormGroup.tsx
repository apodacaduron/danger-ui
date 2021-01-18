import React, { FC } from 'react'
import { ChildrenProps } from 'utils/interfaces'

import './FormGroup.sass'

const FormGroup: FC<ChildrenProps> = ({ children }) => {
  return <div className='danger-form-group'>{children}</div>
}

export default FormGroup
