import React, { FC } from 'react'
import { TableProps } from 'utils/interfaces'

import './Table.sass'

const Table: FC<TableProps> = ({ columns, body }) => {
  const formatColumns = () => {
    return columns.map((col, index) => (
      <th key={index} className='dg-table-head'>
        {col}
      </th>
    ))
  }

  return (
    <table className='dg-table'>
      <thead>
        <tr>{formatColumns()}</tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  )
}

export default Table
