import services from '.';
import API from '../config/api';

export const getAllStartup = async () => {
  const token = localStorage.getItem('token') || '';
  const res = await services.get(API.startup.getAll, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};