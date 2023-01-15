import services from '.';
import API from '../config/api';

export const register = async () => {
  const res = await services.get(API.user.register);

  return res.data;
};

export const login = async () => {
  const res = await services.get(API.user.login);

  return res.data;
};
