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
    'dg-button': true,
    'dg-button-loading': loading,
    'dg-button-block': block,
    'dg-button-regular': design === 'regular',
    'dg-button-light': design === 'light',
    'dg-button-round': design === 'round',
    'dg-button-transparent': design === 'transparent',
    'dg-button-border': design === 'border'
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
