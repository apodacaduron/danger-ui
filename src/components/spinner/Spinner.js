import React from 'react'

import './Spinner.sass'

const Spinner = ({ size = 20, color = 'primary' }) => (
  <div className='spinner' style={{ width: size, height: size }}>
    <div
      className={`double-bounce1 ${color === 'primary' && 'primary'}`}
      style={{
        backgroundColor: color !== 'primary' && color
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
