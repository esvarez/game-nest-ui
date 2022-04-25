import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f29d64',
    },
    primary: {
      main: '#f29d64',
    },
    secondary: {
      main: '#64748B',
    },
    info: {
      main: '#F8FAFC',
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