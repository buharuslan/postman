import { Typography, Box, TextareaAutosize, styled } from "@mui/material"

const Container = styled(Box)`
  width: 100%;
`

const textareaStyle = { 
  width: '100%', 
  padding: 10,  
  background: `url(http://i.imgur.com/2cOaJ.png)`,
  backgroundAttachment: 'local',
  backgroundRepeat: 'no-repeat',
  paddingLeft: 35,
  paddingTop: 10,
  borderColor: '#ccc' 
}

const Response = ({ data }) => {

  return (
    <Container>
      <Typography mt={2} mb={2}>Response</Typography>
      <TextareaAutosize 
        minRows={3}
        style={textareaStyle}
        disabled="disabled"
        value={data}
      />
    </Container>
  )
}

export default Response;