import axios from './axios';

const listAllProducts = (limit, offset) =>
  axios.get(`product/?limit=${limit}&offset=${offset}`);

const productDetails = (id) => axios.get(`product/${id}/`);

export { listAllProducts, productDetails };
