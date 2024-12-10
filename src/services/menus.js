import api from './api';

export const getMenus = async () => {
  const response = await api.get('menus/');
  return response.data;
};

export const getMenuById = async (id) => {
  const response = await api.get(`menus/${id}/`);
  return response.data;
};

export const createMenu = async (menu) => {
  const response = await api.post('menus/', menu);
  return response.data;
};

export const updateMenu = async (id, menu) => {
  const response = await api.put(`menus/${id}/`, menu);
  return response.data;
};

export const deleteMenu = async (id) => {
  const response = await api.delete(`menus/${id}/`);
  return response.data;
};
