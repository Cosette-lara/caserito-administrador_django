import api from './api';

export const getRestaurantes = async () => {
  const response = await api.get('restaurantes/');
  return response.data;
};

export const getRestauranteById = async (id) => {
  const response = await api.get(`restaurantes/${id}/`);
  return response.data;
};

export const createRestaurante = async (restaurante) => {
  const response = await api.post('restaurantes/', restaurante);
  return response.data;
};

export const updateRestaurante = async (id, restaurante) => {
  const response = await api.put(`restaurantes/${id}/`, restaurante);
  return response.data;
};

export const deleteRestaurante = async (id) => {
  const response = await api.delete(`restaurantes/${id}/`);
  return response.data;
};
