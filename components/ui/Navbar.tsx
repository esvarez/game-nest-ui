import { useContext, useState } from 'react';
import Image from 'next/image'

import { 
  AppBar, 
  Box, 
  Button, 
  Container, 
  Divider, 
  Drawer,
  IconButton, 
  List, 
  ListItem, 
  ListItemText, 
  Toolbar, 
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import { UIContext } from '../../context/ui';

const pages = ['Inicio', 'El nido', 'Foro'];

export const Navbar = () => {
  const { openSideMenu, closeSideMenu, sideMenuOpen } = useContext( UIContext )

  return (
    <AppBar position='sticky' color='transparent' >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>

          {/* logo mobile */}
          <Box sx={{ display: 'flex', flexGrow:{ xs: 1, md: 0 } }}>
            <Image 
              src='/img/cuervo.png'              
              alt='logo cuervo'
              width='50px'
              height='30px'
            />
          </Box>

           {/* User menu Fullscreen */}
           <Box sx={{ marginLeft: '16px', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, gap: '8px', display: { xs: 'flex'} }}>
            <Button variant='text' color='info' sx={{ display: {xs: 'none', md: 'flex'} }}>Entrar</Button>
            <Button variant='outlined' color='info'>Registrarse</Button>
          </Box>

          {/* Menu mobile */}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={openSideMenu}
              color='info'
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor='right'
              open={sideMenuOpen}
              onClose={closeSideMenu}
            >
              <Box sx={{ minWidth: 320 }} >

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '8px'}}>
                  <IconButton
                    size='large'
                    onClick={closeSideMenu}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>

                <Divider />

                <List>
                  {pages.map((page, index) => (
                    <ListItem button key={page}>
                      <ListItemText primary={page} />
                    </ListItem>
                  ))}
                </List>

                <Divider />

                <Box sx={{marginTop: '8px', gap: '4px', display: 'flex', justifyContent: 'center' }}>
                  <Button variant='text'>Entrar</Button>
                  <Button variant='outlined'>Registrarse</Button>
                </Box>


              </Box>
            </Drawer>
          </Box>          
        </Toolbar>
      </Container>
    </AppBar>
  )
}