import React, { FC } from 'react'
import Spinner from '../spinner/Spinner'
import classNames from 'classnames'
import { ButtonProps } from 'utils/interfaces'

import './Button.sass'
import 'utils/ripple'

const Button: FC<ButtonProps> = ({
  children,
  disabled = false,
  design = 'regular',
  radius = 4,
  loading = false,
  onClick,
  block = false,
  ...props
}) => {
  const buttonClasses = classNames({
    'danger-button': true,
    'danger-button-loading': loading,
    'danger-button-block': block,
    'danger-button-regular': design === 'regular',
    'danger-button-light': design === 'light',
    'danger-button-round': design === 'round',
    'danger-button-transparent': design === 'transparent',
    'danger-button-border': design === 'border'
  })

  return (
    <button
      {...props}
      onClick={!loading ? onClick : undefined}
      className={buttonClasses}
      disabled={disabled}
      style={{
        borderRadius: `${radius > 50 ? 50 : radius}px`
      }}
    >
      {children}

      {loading && (
        <div className='left-space'>
          <Spinner color='white' size={20} />
        </div>
      )}
      {!loading && !disabled && <div className='rippleJS'></div>}
    </button>
  )
}

export default Button
