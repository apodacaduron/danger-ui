import React from 'react'

import './Badge.sass'

interface IProps {
  children: JSX.Element
}

const Badge = ({ children }: IProps) => {
  return <div className={'DangerBadge'}>{children}</div>
}

export default Badge
