import services from '.';
import API from '../config/api';

export const register = async (
  name: string,
  username: string,
  password: string
) => {
  const payload = {
    name,
    username,
    password,
  };
  const res = await services.post(API.user.register, payload);

  return res.data;
};

export const login = async (username: string, password: string) => {
  const payload = {
    username,
    password,
  };
  const res = await services.post(API.user.login, payload);

  return res.data;
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem('token');
  const res = await services.get(API.user.getUser, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const findUser = async (usercode: string) => {
  const token = localStorage.getItem('token');
  const payload = {
    usercode,
  };
  const res = await services.post(API.user.findUser, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const getProfile = async () => {
  const token = localStorage.getItem('token');

  const res = await services.get(API.user.profile, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const submitProfile = async (
  email: string,
  birthdate: string,
  gender: string,
  interests: string[]
) => {
  const token = localStorage.getItem('token');
  const payload = {
    email,
    birthdate,
    gender,
    interests,
  };

  const res = await services.post(API.user.profile, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
