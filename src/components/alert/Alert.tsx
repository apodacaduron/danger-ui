import classNames from 'classnames'
import React, { FC } from 'react'
import { AlertProps } from 'utils/interfaces'

import './Alert.sass'

const Alert: FC<AlertProps> = ({
  children,
  color = 'primary',
  position = 'top-center',
  visible = false,
  onClick
}) => {
  const containerClasses = classNames({
    'dg-alert-container': true,
    'dg-hide': !visible,
    'dg-position-top-left': position === 'top-left',
    'dg-position-top-center': position === 'top-center',
    'dg-position-top-right': position === 'top-right',
    'dg-position-bottom-left': position === 'bottom-left',
    'dg-position-bottom-center': position === 'bottom-center',
    'dg-position-bottom-right': position === 'bottom-right',
    'dg-primary-background': color === 'primary',
    'dg-success-background': color === 'success',
    'dg-warning-background': color === 'warning',
    'dg-danger-background': color === 'dg'
  })

  return (
    <div
      onClick={onClick}
      className={containerClasses}
      style={{
        background: color !== 'primary' ? color : ''
      }}
    >
      <div className='dg-alert-text'>{children}</div>
    </div>
  )
}

export default Alert
