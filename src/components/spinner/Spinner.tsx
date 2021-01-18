import classNames from 'classnames'
import React, { FC } from 'react'
import { SpinnerProps } from 'utils/interfaces'

import './Spinner.sass'

const Spinner: FC<SpinnerProps> = ({
  size = 30,
  color = 'primary',
  strokeWidth = 2
}) => {
  const circleClasses = classNames({
    circle: true,
    primary: color === 'primary'
  })
  return (
    <svg
      className='spinner'
      style={{
        transform: `scale(${size / 30})`,
        height: 30,
        width: 30
      }}
    >
      <circle
        className={circleClasses}
        cx='15'
        cy='15'
        r='13'
        style={{
          strokeWidth: strokeWidth,
          stroke: color !== 'primary' ? color : ''
        }}
      ></circle>
    </svg>
  )
}

export default Spinner
