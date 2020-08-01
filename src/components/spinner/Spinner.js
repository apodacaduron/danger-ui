import React from 'react'

import styles from './Spinner.sass'

const Spinner = ({ size = 20, width = 1 }) => (
  <div className={styles.LdsRing} style={{ width: size, height: size }}>
    <div style={{ borderWidth: `${width}px` }}></div>
    <div style={{ borderWidth: `${width}px` }}></div>
    <div style={{ borderWidth: `${width}px` }}></div>
  </div>
)

export default Spinner
