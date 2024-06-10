import React, { useState } from 'react'
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import styled from 'styled-components'

  const TableWrapper = styled.div`
    margin-bottom: 10px;
  `
const Table = () => {
  const [clickedRowIndex, setClickedRowIndex] = useState(null);

  const handleRowClick = (rowIndex) => {
    if (clickedRowIndex === rowIndex) {
      setClickedRowIndex(null); 
    } else {
      setClickedRowIndex(rowIndex);
    }
  };

  const columns = [{
    Header: 'PrimaryID',
    accessor: 'PrimaryID' 
  }, {
    Header: 'Manufacturer Name',
    accessor: 'Manufacturer Name',
    resizable: false,
    minWidth: 200
  }, {
    Header: 'Manufacturer Part Number',
    accessor: 'Manufacturer Part Number',
    resizable: true,
    minWidth: 200
  }, {
    Header: 'Material Description',
    accessor: 'Material Description',
    resizable: false,
    minWidth: 200 
  }, {
    Header: 'Material Name',
    accessor: 'Material Name',
    resizable: false,
    minWidth: 200 
  }, {
    Header: 'UNSPSC CODE',
    accessor: 'UNSPSC CODE' ,
    resizable: false,
    minWidth: 200
  }, {
    Header: 'NOUN',
    accessor: 'NOUN',
    resizable: false,
    minWidth: 200 
  }, {
    Header: 'MODIFIER',
    accessor: "MODIFIER",
    resizable: false,
    minWidth: 200
  }, {
    Header: 'NOUN,MODIFIER',
    accessor: 'NOUN-MODIFIER',
    resizable: false,
    minWidth: 200
  }, {
    Header: 'Classification Explaination',
    accessor: 'Classification Explaination',
    resizable: false,
    minWidth: 200
  }, {
    Header: 'Extracted MFR Name',
    accessor: 'Extracted MFR Name',
    resizable: false,
    minWidth: 200
  }, {
    Header: 'Extracted MPN',
    accessor: 'Extracted MPN',
    resizable: false,
    minWidth: 200
  }, {
    Header: 'Predicted MFR Name',
    accessor: 'Predicted MFR Name',
    resizable: false,
    minWidth: 200
  }, {
    Header: 'Predicted MPN',
    accessor: 'Predicted MPN',
    resizable: false,
    minWidth: 200
  }, {
    Header: 'Extracted Attributes',
    accessor: 'Extracted Attributes',
    resizable: false,
    minWidth: 200
  }, {
    Header: 'Extracted Attributes',
    accessor: 'Extracted Attributes',
    resizable: false,
    minWidth: 200
  }, {
    Header: 'Enriched Attributes',
    accessor: 'Enriched Attributes',
    resizable: false,
    minWidth: 200
  }, {
    Header: 'AE Explaination',
    accessor: 'AE Explaination',
    resizable: false,
    minWidth: 200
  }]

  const data = [{
    "PrimaryID": "PrimaryID",
    "Manufacturer Name": "Manufacturer Name",
    "Manufacturer Part Number": "Polia Esticadora Soudronic Pn M 426750 | POLIA; TIPO: ESTICADORA; FABRICANTE SOUDRONIC PN M-426750",
    "Material Description": "POLIA",
    "Material Name": "",
    "UNSPSC CODE": "31162600",
    "NOUN": "PULLEYS",
    "MODIFIER": "",
    "NOUN-MODIFIER": "The product name 'POLIA' is extracted from the material description. A knowledge search for 'POLIA' confirms its relevance to the manufacturing domain. The UNSPSC Code '31162600' and Class 'PULLEYS' are assigned based on the product name.",
    "Classification Explaination": "SOUDRONIC",
    "Extracted MFR Name": "M-426750",
    "Extracted MPN":"SOUDRONIC",
    "Predicted MFR Name": "M-426750",
    "Predicted MPN": "{'SHORT NAME': 'POLIA', 'TYPE': 'ESTICADORA', 'MANUFACTURER PART NUMBER': 'M-426750', 'MANUFACTURER NAME': 'SOUDRONIC'}",
    "Extracted Attributes": "{'MATERIAL': 'STEEL', 'WEIGHT': '2 KG', 'COLOR': 'SILVER', 'FINISH/COATING': 'GALVANIZED'}",
    "Enriched Attributes": "Enriched Attributes",
    "AE Explaination":""

  }]

  
  return (
    <TableWrapper>
      <ReactTable
        data={data}
        columns={columns}
        showPagination={true}
        defaultPageSize={10}
        getTrProps={(state, rowInfo) => {
          if (!rowInfo) return {};
          return {
            onClick: () => handleRowClick(rowInfo.index)
          };
        }}
        getTdProps={(state, rowInfo, column, instance) => {
          if (!rowInfo) return {};
          return {
            style: {
              whiteSpace: clickedRowIndex === rowInfo.index ? 'normal' : 'nowrap'
            }
          };
        }
      }
      />
    </TableWrapper>
  )
}

export default Table