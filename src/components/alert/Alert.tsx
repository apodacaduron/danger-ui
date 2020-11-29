import React from 'react'

import './Alert.sass'

interface IProps {
  children: JSX.Element
  position?: string
  color?: string
  visible?: boolean
  onClick: () => void
}

const Alert = ({
  children,
  color = 'primary',
  position = 'top-center',
  visible = false,
  onClick
}: IProps) => {
  const getBackgroundColor = () => {
    switch (color) {
      case 'primary':
        return 'DangerPrimaryBackground'
      case 'danger':
        return 'DangerDangerBackground'
      case 'warning':
        return 'DangerWarningBackground'
      case 'success':
        return 'DangerSuccessBackground'
      default:
        return 'DangerPrimaryBackground'
    }
  }

  const getPosition = () => {
    switch (position) {
      case 'top-left':
        return 'DangerPositionTopLeft'
      case 'top-center':
        return 'DangerPositionTopCenter'
      case 'top-right':
        return 'DangerPositionTopRight'
      case 'bottom-left':
        return 'DangerPositionBottomLeft'
      case 'bottom-center':
        return 'DangerPositionBottomCenter'
      case 'bottom-right':
        return 'DangerPositionBottomRight'
      default:
        return 'DangerPositionTopCenter'
    }
  }

  return (
    <div
      onClick={onClick}
      className={`${'DangerAlertContainer'} ${getBackgroundColor()} ${getPosition()} ${
        !visible ? 'DangerHide' : ''
      }`}
      style={{
        background: color !== 'primary' ? color : ''
      }}
    >
      <div className={'DangerAlertText'}>{children}</div>
    </div>
  )
}

export default Alert
