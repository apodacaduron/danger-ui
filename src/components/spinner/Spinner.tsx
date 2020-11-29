import React from 'react'

import './Spinner.sass'

interface IProps {
  size?: number
  color?: string
}

const Spinner = ({ size = 20, color = 'primary' }: IProps) => (
  <div className='spinner' style={{ width: size, height: size }}>
    <div
      className={`double-bounce1 ${color === 'primary' && 'primary'}`}
      style={{
        backgroundColor: color !== 'primary' ? color : 'initial'
      }}
    ></div>
    <div
      className={`double-bounce2 ${color === 'primary' && 'primary'}`}
      style={{
        backgroundColor: `${color}`
      }}
    ></div>
  </div>
)

export default Spinner
