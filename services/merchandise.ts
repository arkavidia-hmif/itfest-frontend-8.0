import services from '.';
import API from '../config/api';

export const getAllMerch = async () => {
  const token = localStorage.getItem('token') || '';
  const res = await services.get(API.merchandise.getAll, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const getMerchById = async (id: number) => {
  const token = localStorage.getItem('token') || '';
  const res = await services.get(`${API.merchandise.getOne}/id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const addMerch = async (userCode: string, name: string, stock: number, point: number) => {
  const token = localStorage.getItem('token') || '';
  const payload = {
    userCode,
    name,
    stock,
    point,
  };

  const res = await services.post(API.merchandise.add, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

interface Merch {
  merch_id: number;
  quantity: number;
}

export const checkout = async (
  receiverUsercode: string,
  payload: Merch[],
) => {
  const token = localStorage.getItem('token') || '';
  const payloadData = {
    to: receiverUsercode,
    payload,
  };

  const res = await services.post(API.merchandise.checkout, payloadData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const deleteMerch = async (id: number) => {
  const token = localStorage.getItem('token') || '';
  const payload = {
    id
  };

  const res = await services.post(API.merchandise.deleteMerch, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.status;
};