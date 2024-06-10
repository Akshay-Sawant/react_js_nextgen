import React, { useLayoutEffect, useState } from 'react';
import Header from './Header';
import styled from 'styled-components';
import commaNumber from 'comma-number';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    max-width: 1300px;
    margin: auto;
    padding: 0 20px;
  .ReactTable{
    /* border-top: 0; */
  }
  input[type="file"] {
    display: none;
  }
  
  .custom-file-upload {
    border: 1px solid #ccc;
    border-radius: 5px;
    display: inline-block;
    padding: 8px 12px;
    color: #fff;
    cursor: pointer;
    margin-left: 15px;
    background-color: #2196f3;
    font-weight: 500;
    font-size: 16px;
  }
`

const ActionSection = styled.div`
   /* border: 1px solid rgba(0, 0, 0, 0.1); */
   /* border-bottom: 0; */
   box-sizing: border-box;
   padding: 10px;
   border: 1px solid #e5e5e5;
   margin-top: 10px;
`

const Dashboard = () => {

  const [chosenFile, setChosenFile] = useState(null);
  const [dashboardCredits, setDashboardCredits] = useState(0);
  const navigate = useNavigate();


  useLayoutEffect(() => {
    const actualBtn = document.getElementById('file-upload');
    const fileChosen = document.getElementById('file-chosen');
    actualBtn?.addEventListener('change', () => {
      fileChosen.textContent = actualBtn.files[0].name;
    })
  }, [])


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setChosenFile(file ? file.name : "No files chosen");
  };

  const processData = () => {
    navigate('/processed-data')
  }


  return (
    <>
      <Header />
      <Wrapper>
        <ActionSection>
          <span id="file-chosen">{chosenFile ? chosenFile : "No files chosen"}</span>
          <label htmlFor="file-upload" className="custom-file-upload">
            Browse Files
          </label>
          <input id="file-upload" type="file" onChange={handleFileChange} />
          <button className='custom-file-upload' onClick={processData}>Show More</button>
        </ActionSection>
      </Wrapper>
    </>
  )
}

export default Dashboard