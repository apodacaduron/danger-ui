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
    'danger-alert-container': true,
    'danger-hide': !visible,
    'danger-position-top-left': position === 'top-left',
    'danger-position-top-center': position === 'top-center',
    'danger-position-top-right': position === 'top-right',
    'danger-position-bottom-left': position === 'bottom-left',
    'danger-position-bottom-center': position === 'bottom-center',
    'danger-position-bottom-right': position === 'bottom-right',
    'danger-primary-background': color === 'primary',
    'danger-success-background': color === 'success',
    'danger-warning-background': color === 'warning',
    'danger-danger-background': color === 'danger'
  })

  return (
    <div
      onClick={onClick}
      className={containerClasses}
      style={{
        background: color !== 'primary' ? color : ''
      }}
    >
      <div className='danger-alert-text'>{children}</div>
    </div>
  )
}

export default Alert
