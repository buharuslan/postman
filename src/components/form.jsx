import { useContext } from 'react';

import { Select, MenuItem, TextField, Box, Button, styled } from '@mui/material';

import { DataContext } from '../context/dataProvider';

const Container = styled(Box)`
  @media (max-width: 400px) {
    flex-direction: column;
    gap: 30px;
  };
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const BButton = styled(Button)`
  @media (max-width: 400px) {
    width: 100%;
  };
  width: 100px;
  height: 40px;
  margin-left: [5, '!important'];
`

const BSelect = styled(Select)`
  @media (max-width: 400px) {
    width: 100%;
  };
  width: 150px;
  height: 40px;
  background: #F6F6F6;
`
const BTextField = styled(TextField)`
  width: 100%;
  background: #F6F6F6;
`

const Form = ({ onSendClick }) => {
  const { formData, setFormData } = useContext(DataContext);

  const onUrlChange = (e) => {
    setFormData({ ...formData, url: e.target.value });
  }

  const handleChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
  }

  return (
    <Container>
      <BSelect 
        value={formData.type} 
        label="POST" 
        onChange={(e) => handleChange(e)}
      >
        <MenuItem value={'POST'}>POST</MenuItem>
        <MenuItem value={'GET'}>GET</MenuItem>
      </BSelect>
      <BTextField
        size="small" 
        onChange={(e) => onUrlChange(e)}
      />
      <BButton variant="contained" onClick={() => onSendClick()}>Send</BButton>
    </Container>
  )
}

export default Form;