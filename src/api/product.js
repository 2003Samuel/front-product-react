import axios from "axios";

export const getProduct = async () => {
  const response = await axios.get("http://127.0.0.1:8000/api/productos/");
  return response.data;
};

export const createProduct = async (product) => {
  const response = await axios.post(
    "http://127.0.0.1:8000/api/productos/",
    product
  );
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(
    `http://127.0.0.1:8000/api/productos/${id}`
  );
  return response.data;
};

export const getByIdProduct = async (id) => {
  const response = await axios.get(`http://127.0.0.1:8000/api/productos/${id}`);
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await axios.put(
    `http://127.0.0.1:8000/api/productos/${id}`,
    product
  );
  return response.data;
};
