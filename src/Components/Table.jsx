import React from 'react'
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import styled from 'styled-components'

const Table = () => {

  const TableWrapper = styled.div`
    margin-bottom: 50px;
  `

  const columns = [{
    Header: 'Name',
    accessor: 'name' 
  }, {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span> 
  }, {
    id: 'friendName', 
    Header: 'Friend Name',
    accessor: d => d.friend.name
  }, {
    Header: props => <span>Friend Age</span>, 
    accessor: 'friend.age'
  }]

  
  return (
    <TableWrapper>
      <ReactTable
        data={[]}
        columns={columns}
        showPagination={true}
        defaultPageSize={10}
      />
    </TableWrapper>
  )
}

export default Table