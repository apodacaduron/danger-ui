import React from 'react'
import { Table } from 'danger-ui'

const TableComponent = () => {
  const columns = ['name', 'age', 'occupation', 'email']
  const data = [
    {
      name: 'Daniel',
      age: 23,
      occupation: 'Developer',
      email: 'apodacaduron@gmail.com'
    },
    {
      name: 'Daniel',
      age: 23,
      occupation: 'Developer',
      email: 'apodacaduron@gmail.com'
    }
  ]
  return (
    <div>
      <h2>Table</h2>
      <Table
        columns={columns}
        body={data.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {columns.map((column, columnIndex) => {
                return <td key={columnIndex}>{row[column]}</td>
              })}
            </tr>
          )
        })}
      />
    </div>
  )
}

export default TableComponent
