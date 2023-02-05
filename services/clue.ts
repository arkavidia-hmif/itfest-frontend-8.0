import services from '.';
import API from '../config/api';

export const getClue = async () => {
  const token = localStorage.getItem('token') || '';
  const res = await services.get(API.clue.getClue, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const submitClue = async (answer: string) => {
  const token = localStorage.getItem('token') || '';
  const payload = {
    code: answer,
  };

  const res = await services.post(API.clue.submitClue, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const getTries = async () => {
  const token = localStorage.getItem('token') || '';
  const res = await services.get(API.clue.getTries, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
