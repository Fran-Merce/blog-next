import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'  component='div' >
        <Toolbar  variant='regular' sx={{ backgroundColor: 'background.paper',display:"flex",justifyContent:'space-between',alignItems:'center',width:'100%'}}>
          <IconButton edge='start' color='default' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Box display={'flex'} gap="10px">
            <Typography component='p' color='text.secondary'>
              Photos
            </Typography>
            <Typography component='p' color='text.secondary'>
              Photos
            </Typography>
            <Typography component='p' color='text.secondary'>
              Photos
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
