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

  .rt-th{
    background-color: #176bb3;
    color: #fff;
  }
  
  .rt-thead .rt-th{
    padding: 15px 0px;
    font-weight: 400;
  }

  .-even{
    background-color: #EFF2F8;
  }
`

// const Para = styled.p`
//   margin-bottom: 0.5rem;
// `

// const CreditsDiv = styled.div`
//   padding: 0px 15px;
//   a{
//     margin-top: auto;
//     color: #e99d45;
//     font-weight: bold;
//     font-size: 15px;
//     :hover{
//       color: #e99d45;
//     }
//     img{
//       margin-left: 5px;
//     }
//   }
// `

// const Credits = styled.div`
//   display: flex;
//   width: 100%;
//   p{
//     color: #757575
//   }
//   /* margin: auto; */
//   text-align: left;
//   border-right: 1px solid #e5e5e5;
//   &:first-child{
//     border-left: 1px solid #e5e5e5;
//   }
// `
// const Digits = styled.div`
  
//   font-weight: bold;
//   font-size: 25px;
// `

const ActionSection = styled.div`
   /* border: 1px solid rgba(0, 0, 0, 0.1); */
   /* border-bottom: 0; */
   box-sizing: border-box;
   padding: 10px;
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
        <h2>Dashboard</h2>
        {/* <section style={{ height: '100px', display: 'flex', borderTop: "1px solid #e5e5e5" }}>
          <Credits>
            <CreditsDiv>
              <Para>SKUs</Para>
              <Digits>{commaNumber(dashboardCredits['total-used-credits'] || 0)}</Digits>
            </CreditsDiv>
          </Credits>
          <Credits>
            <CreditsDiv>
              <Para>Categories</Para>
              <Digits>{commaNumber(dashboardCredits['total-available-credits'] || 0)}</Digits>
            </CreditsDiv>
          </Credits>
          <Credits>
            <CreditsDiv>
              <Para>Defined Data Sheets</Para>
              <Digits>{commaNumber(dashboardCredits['total-labs-credits'] || 0)}</Digits>
            </CreditsDiv>
          </Credits>
          <Credits>
            <CreditsDiv>
              <Para>Un-defined Data Sheets</Para>
              <Digits>{commaNumber(dashboardCredits['total-active-client'] || 0)}</Digits>
            </CreditsDiv>
          </Credits>
        </section> */}
        <ActionSection>
          <span id="file-chosen">{chosenFile ? chosenFile : "No files chosen"}</span>
          <label htmlFor="file-upload" className="custom-file-upload">
            Browse Files
          </label>
          <input id="file-upload" type="file" onChange={handleFileChange} />
          <button className='custom-file-upload' onClick={processData}>Process Data</button>
        </ActionSection>
      </Wrapper>
    </>
  )
}

export default Dashboard