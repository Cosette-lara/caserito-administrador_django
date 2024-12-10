import React, { useState } from 'react';
import { Box, TextField, Button, Alert,} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import api from '../services/api';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const response = await api.post('auth/login/', {
        username: username,
        password: password,
      });
      localStorage.setItem('token', response.data.access); 
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError(true); 
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url('https://blog.kulturekonnect.com/hs-fs/hubfs/restaurant-manager.jpg?width=2121&height=1414&name=restaurant-manager.jpg ')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></Box>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f4f4f4',
          padding: 4,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 400,
            padding: 4,
            backgroundColor: '#ffffff',
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Box textAlign="center" sx={{ mb: 3 }}>
            <img src={logo} alt="Caserito Logo" style={{ height: 50 }} />
          </Box>
          {error && <Alert severity="error">Credenciales inválidas</Alert>}
          <TextField
            label="Nombre de Usuario o Dirección de correo electrónico"
            fullWidth
            sx={{ mb: 2 }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            sx={{ mb: 2 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={handleLogin}
            sx={{ mb: 2 }}
          >
            Iniciar Sesión
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
