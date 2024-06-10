import React, { useLayoutEffect, useState } from 'react';
import Table from './Table'
import Header from './Header'
import styled from 'styled-components';
import commaNumber from 'comma-number';

const TablePage = () => {

  const [dashboardCredits, setDashboardCredits] = useState(0);

  const Wrapper = styled.div`
    max-width: 1300px;
    margin: auto;
    padding: 0 20px;

    // .tableBorder{
    //   width: 1300px;
    //   border-top: 1px solid #e5e5e5;
    //   padding-bottom: 10px;
    // }
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
  /* margin: auto; */
  text-align: left;
  border-right: 1px solid #e5e5e5;
  height: 85px;
  &:first-child{
    border-left: 1px solid #e5e5e5;
    height: 85px;
  }
`
  const Digits = styled.div`
  
  font-weight: bold;
  font-size: 25px;
`


  return (
    <>
      <Wrapper>
        <Header />
        <section style={{ height: '100px', display: 'flex', borderTop: "1px solid #e5e5e5", marginBottom: "20px",paddingTop: "16px" }}>
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
        <div className="tableBorder">
          <Table />
        </div>
      </Wrapper>
    </>
  )
}

export default TablePage