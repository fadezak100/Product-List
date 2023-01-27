import axios from './axios';

const addProductsToCart = (productId) =>
  axios.post('cart-items/', { cart: 1, product: productId, quantity: 1 });

const getAllCartItems = () => axios.get('cart-items/');

const removeProductFromCart = (productId) => axios.post('cart-items/', { product: productId, quantity: -1 })

export { addProductsToCart, getAllCartItems, removeProductFromCart };
