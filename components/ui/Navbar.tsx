import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuOutlineIcon from '@mui/icons-material/MenuOutlined'

export const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton>
          <MenuOutlineIcon />
        </IconButton>

        <Typography variant='h6'>Game Nest</Typography>
      </Toolbar>
    </AppBar>
  )
}