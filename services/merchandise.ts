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

export const addMerch = async (name: string, stock: number, point: number) => {
  const token = localStorage.getItem('token') || '';
  const payload = {
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

export const checkout = async (
  receiverUsercode: string,
  payload: {
    merch_id: number;
    quantity: number;
  }
) => {
  const token = localStorage.getItem('token') || '';
  const payloadData = {
    to: receiverUsercode,
    payload: {
      merch_id: payload.merch_id,
      quantity: payload.quantity,
    },
  };

  const res = await services.post(API.merchandise.checkout, payloadData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
