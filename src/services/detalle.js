import api from './api';

export const getDetalles = async () => {
  const response = await api.get('detalles/');
  return response.data;
};

export const getDetalleById = async (id) => {
  const response = await api.get(`detalles/${id}/`);
  return response.data;
};

export const createDetalle = async (detalle) => {
  const response = await api.post('detalles/', detalle);
  return response.data;
};

export const updateDetalle = async (id, detalle) => {
  const response = await api.put(`detalles/${id}/`, detalle);
  return response.data;
};

export const deleteDetalle = async (id) => {
  const response = await api.delete(`detalles/${id}/`);
  return response.data;
};
