import React from 'react'

import './Table.sass'

interface IProps {
  columns: Array<string>
  body: JSX.Element
}

const Table = ({ columns, body }: IProps) => {
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
