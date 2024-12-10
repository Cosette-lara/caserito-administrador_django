import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#83B09B' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Administrados Caserito
        </Typography>
        <Button color="inherit" component={Link} to="/usuarios">
          Usuarios
        </Button>
        <Button color="inherit" component={Link} to="/restaurantes">
          Restaurantes
        </Button>
        <Button color="inherit" component={Link} to="/menus">
          Menús
        </Button>
        <Button color="inherit" component={Link} to="/roles">
          Roles
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;

