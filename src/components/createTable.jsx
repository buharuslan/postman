import { useState } from 'react';

import { Box, styled, Typography, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material';
import AddRow from './addRow';

const CTableCell = styled(TableCell)`
  display: 'flex';
  align-items: 'center';
  justify-content: 'space-between';
`

const CreateTable = ({ text, data, setData }) => {
  const [rows, addRows] = useState([0]);
    
  return (
    <Box>
      <Typography mt={2} mb={2}>{text}</Typography>
      <Table sx={{ minWidth: '100%', border: '1px solid rgba(224, 224, 224, 1)' }} aria-label="simple table">
        <TableHead>
          <TableRow>
              <CTableCell></CTableCell>
              <CTableCell>KEY</CTableCell>
              <CTableCell>VALUE</CTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map((row, index) => {
              return <AddRow 
                addRows={addRows} 
                rowId={index} 
                key={index}
                setData={setData}
                data={data} 
              />
            })
          }
        </TableBody>
      </Table>
    </Box>
  )
}

export default CreateTable;