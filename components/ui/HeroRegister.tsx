import { Box, Button, Container, TextField, Typography } from '@mui/material'


export const HeroRegister = () => {
  return (
    <Container maxWidth='xl'>
      <Typography
        variant='h1'
        sx={{color: '#F8FAFC'}}
      >
        Lorem ipsum 
      </Typography>

      <Typography
        variant='subtitle1'
        sx={{color: '#c7cfdb'}}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      
      <Box sx={{display:'flex', gap: '8px', flexDirection:'column'}}>
      <TextField id='outlined-basic' placeholder='Outlined' variant='outlined' />
        <Button color='info'>
          Registrarse
        </Button>
      </Box>
      
    </Container>
  )
}