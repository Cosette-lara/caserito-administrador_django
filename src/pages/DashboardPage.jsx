import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import AdminNavbar from '../components/AdminNavbar';

const DashboardPage = () => {
  return (
    <>
      <AdminNavbar />
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Panel de Administración
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Usuarios</Typography>
                <Typography variant="body2">Gestiona los usuarios registrados.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Restaurantes</Typography>
                <Typography variant="body2">Gestiona los restaurantes disponibles.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Menús</Typography>
                <Typography variant="body2">Gestiona los menús de los restaurantes.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Roles</Typography>
                <Typography variant="body2">Gestiona los roles de los usuarios.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashboardPage;

