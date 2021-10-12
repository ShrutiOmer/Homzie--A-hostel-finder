import React from 'react'
import styles from './Pricing.module.css'
import Header from '../Header/Header'
import { useTable } from 'react-table'

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    })
  
    // Render the UI for your table
    return (
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
  
const Pricing = () => {
    const columns = React.useMemo(
        () => [
          {
            Header: 'Room Type',
            accessor: 'col1',
          },
          
          {
            Header: 'Price',
            accessor: 'col2', 
          },
        ],
        []
      )
    
      const data = React.useMemo(
        () => [
          {
            col1: 'Single room non-ac',
            col2: '20 Rs',
          },
          {
            col1: 'Single room non-ac',
            col2: '20 Rs',
          },
          {
            col1: 'Single room non-ac',
            col2: '20 Rs',
          },
          {
            col1: 'Single room non-ac',
            col2: '20 Rs',
          },
        ],
        []
      )
    
    return (
        <div className={styles.container} >
            <Header name='Pricing Details'/>
            <div className={styles.content}>
                <Table columns={columns} data={data} />
            </div>
        </div>
    )
}

export default Pricing
