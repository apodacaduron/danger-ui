import React from 'react'

import './FormGroup.sass'

interface IProps {
  children: JSX.Element
}

const FormGroup = ({ children }: IProps) => {
  return <div className={'DangerFormGroup'}>{children}</div>
}

export default FormGroup
