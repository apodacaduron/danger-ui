import React from 'react'

import './Spinner.sass'

const Spinner = ({ size = 20, width = 1 }) => (
  <div className={'LdsRing'} style={{ width: size, height: size }}>
    <div style={{ borderWidth: `${width}px` }}></div>
    <div style={{ borderWidth: `${width}px` }}></div>
    <div style={{ borderWidth: `${width}px` }}></div>
  </div>
)

export default Spinner
