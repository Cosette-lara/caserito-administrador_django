import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Stack, Snackbar, Alert, Paper } from '@mui/material';
import DataTable from '../components/DataTable';
import api from '../services/api';

const MenusPage = () => {
  const [menus, setMenus] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    api.get('menus/').then((response) => {
      setMenus(
        response.data.map((menu) => ({
          id: menu.pk_menu,
          nombre: menu.nombre,
          precio: menu.precio,
          descripcion: menu.descripcion,
        }))
      );
    });
  }, []);

  const handleAdd = () => {
    setSnackbar({ open: true, message: 'Añadir menú no implementado', severity: 'info' });
  };

  const handleEdit = (id) => {
    setSnackbar({ open: true, message: `Editar menú con ID ${id} no implementado`, severity: 'info' });
  };

  const handleDelete = (id) => {
    if (window.confirm(`¿Estás seguro de eliminar el menú con ID ${id}?`)) {
      api.delete(`menus/${id}/`).then(() => {
        setMenus((prev) => prev.filter((menu) => menu.id !== id));
        setSnackbar({ open: true, message: 'Menú eliminado con éxito', severity: 'success' });
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: '', severity: 'success' });
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'nombre', headerName: 'Nombre', width: 200 },
    { field: 'precio', headerName: 'Precio', width: 150 },
    { field: 'descripcion', headerName: 'Descripción', width: 300 },
    {
      field: 'acciones',
      headerName: 'Acciones',
      width: 300,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <Button variant="contained" color="primary" onClick={() => handleEdit(params.row.id)}>
            Editar
          </Button>
          <Button variant="contained" color="error" onClick={() => handleDelete(params.row.id)}>
            Eliminar
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
      }}
    >
      <Paper
        sx={{
          padding: 3,
          marginBottom: 3,
          borderRadius: 2,
          backgroundColor: '#ffffff',
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Gestión de Menús
        </Typography>
        <DataTable rows={menus} columns={columns} />
      </Paper>
      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default MenusPage;






