import React from 'react'
import Spinner from '../spinner/Spinner'

import './Button.sass'
import '../../utils/ripple'

interface IProps {
  children: JSX.Element
  disabled?: boolean
  design?: string
  radius?: number
  loading?: boolean
  onClick: () => void
  block?: boolean
}

const Button = ({
  children,
  disabled = false,
  design = 'regular',
  radius = 4,
  loading = false,
  onClick,
  block = false,
  ...props
}: IProps) => {
  const checkType = (_design: string) => {
    switch (_design) {
      case 'regular':
        return 'DangerButtonRegular'
      case 'light':
        return 'DangerButtonLight'
      case 'round':
        return 'DangerButtonRound'
      case 'transparent':
        return 'DangerButtonTransparent'
      case 'border':
        return 'DangerButtonBorder'
      default:
        return 'DangerButtonRegular'
    }
  }

  return (
    <button
      {...props}
      onClick={!loading ? onClick : undefined}
      className={`${'DangerButton'} ${checkType(design)} ${
        loading && 'DangerButtonLoading'
      } ${block && 'DangerButtonBlock'}`}
      disabled={disabled}
      style={{
        borderRadius: `${radius > 50 ? 50 : radius}px`
      }}
    >
      {children}

      {loading && (
        <div className={'DangerSpinner'}>
          <Spinner color='white' />
        </div>
      )}
      {!loading && !disabled && <div className='rippleJS'></div>}
    </button>
  )
}

export default Button
