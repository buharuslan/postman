import { useState } from 'react';

import { TextField, Checkbox, TableCell, TableRow, styled } from '@mui/material';

const CTableCell = styled(TableCell)`
  padding: ['2px 5px', '!important'];
  border: '1px solid rgba(224, 224, 224, 1)';
  border-collapse: 'collapse';
`

const CCheckbox = styled(Checkbox)`
  padding: ['2px 5px', '!important'];
`

const CTextField = styled(TextField)`
  width: '100%';
`

const AddRow = ({ addRows, rowId, data, setData }) => {

  const [checkCheckbox, setCheckCheckbox] = useState(false);
    
  const handleChange = (e) => {
    let result = data.filter(entry => entry.id === Number(e.target.name))[0];
        
    if (!checkCheckbox) {
        setCheckCheckbox(true);
        addRows(oldArr => [...oldArr, rowId]);
        result = { ...result, id: rowId, check: true }
    } else {
        setCheckCheckbox(false);
        result = { ...result, id: rowId, check: false }
    }
        
    let index = data.findIndex((value) => value.id === Number(e.target.name));
    if (index === -1) {
        setData(oldArr => [...oldArr, result]);
    } else {
        const newArray = Object.assign([...data], {
          [index]: result
        });
        setData(newArray)    
    }
  }
    
  const onTextChange = (e) => {
      let result = data.filter(entry => entry.id === rowId)[0];
      result = { ...result, id: rowId, [e.target.name]: e.target.value }

      let index = data.findIndex((value) => value.id === rowId);
      
      if (index === -1) {
        setData(oldArr => [...oldArr, result]);
      } else {
        const newArray = Object.assign([...data], {
            [index]: result
        });
        setData(newArray)    
      }
  }
    
  return (
    <TableRow>
      <CTableCell>
        <CCheckbox 
          checked={checkCheckbox}
          size='large' 
          name={rowId}
          onChange={(e) => handleChange(e)} />
      </CTableCell>
      <CTableCell>
        <CTextField
          inputProps={{ style: { height: 30, padding: '0 5px' } }}
          name="key"
          onChange={(e) => onTextChange(e)}
        />
      </CTableCell>
      <TableCell>
        <CTextField
          inputProps={{ style: { height: 30, padding: '0 5px' } }}
          name="value"
          onChange={(e) => onTextChange(e)}
      /></TableCell>
    </TableRow>
  )
}

export default AddRow;