import services from '.';
import API from '../config/api';

export const getHistory = async () => {
  const token = localStorage.getItem('token') || '';
  const res = await services.get(API.point.history, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const grantPoints = async (usercode: string, amount: number) => {
  const token = localStorage.getItem('token') || '';
  const payload = {
    usercode,
    point: amount,
  };

  const res = await services.post(API.point.grant, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
