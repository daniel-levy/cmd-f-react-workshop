import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

               
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static" sx={{height: '90px', justifyContent: 'center'}}>
        <Toolbar>
          <img src="Logo.jpg" alt="logo"/>
          <Typography variant="h5" component="div" sx={{ color: "#4B286D", flexGrow: 1 }}>
            ElleHacks React Tutorial
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;