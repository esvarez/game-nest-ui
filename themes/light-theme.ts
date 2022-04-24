import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[200],
    },
    primary: {
      main: '#f29d64',
    },
    secondary: {
      main: '#64748B',
    },
    error: {
      main: '#f44336',
    }
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      }
    }
  }
})