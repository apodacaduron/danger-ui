import React from 'react'

import './Table.sass'

const Table = ({ columns, body }) => {
  const formatColumns = () => {
    return columns.map((col, index) => (
      <th key={index} className={'DangerTableHead'}>
        {col}
      </th>
    ))
  }

  return (
    <table className={'DangerTable'}>
      <thead>
        <tr>{formatColumns()}</tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  )
}

export default Table
