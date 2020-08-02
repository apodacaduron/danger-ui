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
      case 'light':
        return styles.ByteButtonLight
      case 'round':
        return styles.ByteButtonRound
      case 'transparent':
        return styles.ByteButtonTransparent
      case 'border':
        return styles.ByteButtonBorder
      default:
        return styles.ByteButtonRegular
    }
  }

  return (
    <button
      {...props}
      onClick={!loading ? onClick : undefined}
      className={`${styles.ByteButton} ${checkType(design)} ${
        loading && styles.ByteButtonLoading
      } ${block && styles.ByteButtonBlock}`}
      disabled={disabled}
      style={{
        borderRadius: `${radius > 50 ? 50 : radius}px`
      }}
    >
      {children}

      {loading && (
        <div className={styles.ByteSpinner}>
          <Spinner />
        </div>
      )}
      {!loading && !disabled && <div className='rippleJS'></div>}
    </button>
  )
}

export default Button
