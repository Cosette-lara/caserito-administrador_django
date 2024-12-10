import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminNavbar from './components/AdminNavbar';
import LoginPage from './pages/LoginPage';
import UsuariosPage from './pages/UsuariosPage';
import RestaurantesPage from './pages/RestaurantesPage';
import RolesPage from './pages/RolesPage';

const App = () => {
  const token = localStorage.getItem('token'); 

  return (
    <Router>
      {token && <AdminNavbar />} 
      <Routes>
        <Route path="/login-administrador" element={<LoginPage />} />
        {token ? (
          <>
            <Route path="/usuarios" element={<UsuariosPage />} />
            <Route path="/restaurantes" element={<RestaurantesPage />} />
            <Route path="/roles" element={<RolesPage />} />
          </>
        ) : (
          <Route path="*" element={<LoginPage />} /> 
        )}
      </Routes>
    </Router>
  );
};

export default App;
