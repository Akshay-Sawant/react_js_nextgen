import React, { useLayoutEffect } from 'react';
import ReactTable from "react-table-v6";
import 'react-table-v6/react-table.css'
import Header from './Header';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 1300px;
    margin: auto;
  .ReactTable{
    margin-top: 20px;
  }
  input[type="file"] {
    display: none;
  }
  
  .custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
  }
`

const DashboardTable = () => {

  useLayoutEffect(() => {
    const actualBtn = document.getElementById('file-upload');
    const fileChosen = document.getElementById('file-chosen');
    actualBtn.addEventListener('change', () => {
      fileChosen.textContent = actualBtn.files[0].name;
    })
  }, [])

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
    <>
      <Header />
      <Wrapper>
      <h2>Dashboard</h2>
        <span id="file-chosen">No file chosen</span>
        <label for="file-upload" class="custom-file-upload">
          Browse
        </label>
        <input id="file-upload" type="file" />
        <button>Process Data</button>
        <ReactTable
          data={[]}
          columns={columns}
          showPagination={false}
          defaultPageSize={10}
        />
      </Wrapper>
    </>
  )
}

export default DashboardTable