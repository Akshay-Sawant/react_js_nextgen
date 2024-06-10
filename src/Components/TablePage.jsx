import React, { useLayoutEffect, useState } from 'react';
import Table from './Table'
import Header from './Header'
import styled from 'styled-components';
import commaNumber from 'comma-number';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 0 20px;

  .section{
     height: 100px;
     display: flex;
     justify-content: center ;
     margin-bottom: 20px;
     padding-top: 26px;
      width: 80%;
  }

  
.rt-th{
  background-color: #176bb3;
  color: #fff;
  text-align: left;
  padding: 5px 6px 5px 6px !important;
}

.rt-thead .rt-th{
  padding: 15px 0px;
  font-weight: 400;
}

.-even{
  background-color: #EFF2F8;
}
 
.rt-td{
  border-right: 2px solid rgba(0, 0, 0, 0.02)  !important;
  /* white-space: normal; */
}

.exportToExcel{
   border: 1px solid #2196f3;
    border-radius: 5px;
    display: inline-block;
    padding: 12px;
    color: #fff;
    cursor: pointer;
    background-color: #2196f3;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.5s;
    &:hover{
      background-color: #fff;
      color: #000;
      border: 1px solid #2196f3;
    }
}

.backbutton{
  border: 1px solid #2196f3;
    border-radius: 5px;
    display: inline-block;
    padding: 5px 22px;
    cursor: pointer;
    background-color: #fff;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.5s;
    &:hover{
      background-color: #2196f3;
      color: #fff;
      border: 1px solid #2196f3;
    }
}

.tableButton{
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 10px 80px 10px;

}
  `

const Para = styled.p`
margin-bottom: 0.5rem;
`
const CreditsDiv = styled.div`
padding: 0px 15px;
a{
  margin-top: auto;
  color: #e99d45;
  font-weight: bold;
  font-size: 15px;
  :hover{
    color: #e99d45;
  }
  img{
    margin-left: 5px;
  }
}
`

const Credits = styled.div`
display: flex;
width: 100%;
p{
  color: #757575
}
margin: auto; 
text-align: left;
border-right: 1px solid #e5e5e5;
&:first-child{
  border-left: 1px solid #e5e5e5;
}
`
const Digits = styled.div`

font-weight: bold;
font-size: 25px;
`

const TablePage = () => {

  const [dashboardCredits, setDashboardCredits] = useState(0);
  const history = useNavigate()

  const ExportToExcel = () =>{
    
  }

  return (
    <>
      <Wrapper>
        <Header />
        <section style={{ height: '100px', display: 'flex', margin: "30px 0" }}>
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
        </section>
          <Table />
        <div className='tableButton'>
          <button className='backbutton' onClick={()=>history(-1)}>Back</button>
          <button className='exportToExcel' onClick={ExportToExcel}>Export To Excel</button>
        </div>
      </Wrapper>
    </>
  )
}

export default TablePage