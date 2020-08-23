import React from 'react'
import Spinner from '../spinner/Spinner'

import styles from './Button.sass'
import '../../utils/ripple'

const Button = ({
  children,
  disabled = false,
  design = 'regular',
  radius = 10,
  loading = false,
  onClick,
  block = false,
  ...props
}) => {
  const checkType = (_design) => {
    switch (_design) {
      case 'regular':
        return styles.DangerButtonRegular
      case 'light':
        return styles.DangerButtonLight
      case 'round':
        return styles.DangerButtonRound
      case 'transparent':
        return styles.DangerButtonTransparent
      case 'border':
        return styles.DangerButtonBorder
      default:
        return styles.DangerButtonRegular
    }
  }

  return (
    <button
      {...props}
      onClick={!loading ? onClick : undefined}
      className={`${styles.DangerButton} ${checkType(design)} ${
        loading && styles.DangerButtonLoading
      } ${block && styles.DangerButtonBlock}`}
      disabled={disabled}
      style={{
        borderRadius: `${radius > 50 ? 50 : radius}px`
      }}
    >
      {children}

      {loading && (
        <div className={styles.DangerSpinner}>
          <Spinner />
        </div>
      )}
      {!loading && !disabled && <div className='rippleJS'></div>}
    </button>
  )
}

export default Button
