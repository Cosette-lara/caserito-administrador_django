import api from './api';

export const getRoles = async () => {
  const response = await api.get('roles/');
  return response.data;
};

export const getRolById = async (id) => {
  const response = await api.get(`roles/${id}/`);
  return response.data;
};

export const createRol = async (rol) => {
  const response = await api.post('roles/', rol);
  return response.data;
};

export const updateRol = async (id, rol) => {
  const response = await api.put(`roles/${id}/`, rol);
  return response.data;
};

export const deleteRol = async (id) => {
  const response = await api.delete(`roles/${id}/`);
  return response.data;
};
