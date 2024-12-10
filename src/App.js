import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminNavbar from './components/AdminNavbar';
import DashboardPage from './pages/DashboardPage';
import UsuariosPage from './pages/UsuariosPage';
import RestaurantesPage from './pages/RestaurantesPage';
import MenusPage from './pages/MenusPage';
import RolesPage from './pages/RolesPage';

const App = () => {
  return (
    <Router>
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route path="/restaurantes" element={<RestaurantesPage />} />
        <Route path="/menus" element={<MenusPage />} />
        <Route path="/roles" element={<RolesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
