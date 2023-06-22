import axios from "axios";

const url_back = "https://apitienda.softwaremys.site/api/productos";

export const getProduct = async () => {
  const response = await axios.get(url_back);
  return response.data;
};

export const createProduct = async (product) => {
  const response = await axios.post(url_back, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${url_back}/${id}`);
  return response.data;
};

export const getByIdProduct = async (id) => {
  const response = await axios.get(`${url_back}/${id}`);
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await axios.put(`${url_back}/${id}`, product);
  return response.data;
};
