import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import api from '../services/api'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await api.post('auth/login/', {
        username: username,
        password: password,
      });
      localStorage.setItem('token', response.data.access); // aqui se guarda el token en localStorage
      window.location.href = '/dashboard'; // en esta parte se redirige al usuario al dashboard
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError(true); 
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box
        sx={{
          width: 400,
          padding: 4,
          backgroundColor: '#ffffff',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" textAlign="center" sx={{ mb: 3 }}>
          Inicio de Sesión
        </Typography>
        {error && <Alert severity="error">Credenciales inválidas</Alert>}
        <TextField
          label="Usuario"
          fullWidth
          sx={{ mb: 2 }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          sx={{ mb: 3 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Iniciar Sesión
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;


