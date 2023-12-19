import { Box, Typography } from '@mui/material';

const ErrorScreen = () => {
  const error = 'https://i.stack.imgur.com/01tZQ.png';

  return (
    <Box>
      <Typography mt={2} mb={2}>Response</Typography>
      <Box style={{ display: 'flex' }}>
          <img src={error} alt="error" className='error' />
      </Box>
    </Box>
  )
}

export default ErrorScreen;