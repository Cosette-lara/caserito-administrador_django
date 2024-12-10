import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; 
import logo from '../assets/images/LogoAdministrador.png'; 

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login-administrador'); 
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#83B09B' }}>
      <Toolbar>
        <Box
          component="img"
          src={logo}
          alt="Caserito Logo"
          sx={{
            height: 40,
            marginRight: 2,
            cursor: 'pointer',
          }}
          onClick={() => navigate('/dashboard')} 
        />
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'block' }, 
          }}
        >
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Button color="inherit" component={Link} to="/usuarios">
            Usuarios
          </Button>
          <Button color="inherit" component={Link} to="/restaurantes">
            Restaurantes
          </Button>
          <Button color="inherit" component={Link} to="/roles">
            Roles
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Box>
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton
            color="inherit"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} component={Link} to="/usuarios">
              Usuarios
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/restaurantes">
              Restaurantes
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/roles">
              Roles
            </MenuItem>
            <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;



