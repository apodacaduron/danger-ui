import React from 'react'

import styles from './Table.sass'

const Table = ({ columns, body }) => {
  const formatColumns = () => {
    return columns.map((col, index) => (
      <div key={index} className={styles.DangerTableHead}>
        {col}
      </div>
    ))
  }

  return (
    <div className={styles.DangerTable}>
      <div className={styles.DangerTableHeading}>{formatColumns()}</div>
      <div className={styles.DangerTableBody}>{body}</div>
    </div>
  )
}

export default Table
