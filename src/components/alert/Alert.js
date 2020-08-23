import React from 'react'

import styles from './Alert.sass'

const Alert = ({
  children,
  color = 'primary',
  position = 'top-center',
  visible = false,
  onClick
}) => {
  const getBackgroundColor = () => {
    switch (color) {
      case 'primary':
        return styles.DangerPrimaryBackground
      case 'danger':
        return styles.DangerDangerBackground
      case 'warning':
        return styles.DangerWarningBackground
      case 'success':
        return styles.DangerSuccessBackground
      default:
        return styles.DangerPrimaryBackground
    }
  }

  const getPosition = () => {
    switch (position) {
      case 'top-left':
        return styles.DangerPositionTopLeft
      case 'top-center':
        return styles.DangerPositionTopCenter
      case 'top-right':
        return styles.DangerPositionTopRight
      case 'bottom-left':
        return styles.DangerPositionBottomLeft
      case 'bottom-center':
        return styles.DangerPositionBottomCenter
      case 'bottom-right':
        return styles.DangerPositionBottomRight
      default:
        return styles.DangerPositionTopCenter
    }
  }

  return (
    <div
      onClick={onClick}
      className={`${
        styles.DangerAlertContainer
      } ${getBackgroundColor()} ${getPosition()} ${
        !visible ? styles.DangerHide : ''
      }`}
      style={{
        background: color !== 'primary' ? color : ''
      }}
    >
      <div className={styles.DangerAlertText}>{children}</div>
    </div>
  )
}

export default Alert
