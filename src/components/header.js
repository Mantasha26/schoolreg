import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Drawer from './drawer';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';



export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: "gray" }}>
       <Toolbar>
        <Drawer/>

          <Typography variant="h5" component="div" sx={{ flexGrow: 1, marginRight: "25%" }} >
            Regestration From
          </Typography>
        </Toolbar>
      </AppBar>


     
    </Box>

  )
}
