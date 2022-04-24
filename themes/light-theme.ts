import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[200],
    },
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff9800',
    },
    error: {
      main: '#f44336',
    }
  }
})