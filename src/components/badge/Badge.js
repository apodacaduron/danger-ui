import React from 'react'

import styles from './Badge.sass'

const Badge = ({ text }) => {
  return (
    <div className={styles.DangerBadge}>{text}</div>
  )
}

export default Badge