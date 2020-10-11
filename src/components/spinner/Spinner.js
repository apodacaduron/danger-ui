import React from 'react'

import './Spinner.sass'
import styles from '../../variables.scss'

const Spinner = ({ size = 20, width = 1, color = styles.danger }) => (
  <div className={'LdsRing'} style={{ width: size, height: size }}>
    <div
      style={{
        borderWidth: `${width}px`,
        borderColor: `${color} transparent transparent transparent`
      }}
    ></div>
    <div
      style={{
        borderWidth: `${width}px`,
        borderColor: `${color} transparent transparent transparent`
      }}
    ></div>
    <div
      style={{
        borderWidth: `${width}px`,
        borderColor: `${color} transparent transparent transparent`
      }}
    ></div>
  </div>
)

export default Spinner
