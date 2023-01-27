import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import useCart from '../../hooks/useCart';
import { addProductsToCart, removeProductFromCart } from '../../api/cart';

export default function ProductCart({ quantity, info }) {
  const { dispatch } = useCart();

  const [numberOfProduct, setNumberOfProduct] = useState(quantity);

  const handleAddingProducts = async () => {
    setNumberOfProduct((prevNumberOfProduct) => prevNumberOfProduct + 1);
    try {
      await addProductsToCart(info.id);
    } catch (error) {
      toast.error('internal server error');
    }
    dispatch({
      type: 'INCREASE_QUANTITY',
      payload: { productId: info.id, productPrice: info.price },
    });
  };

  const handleRemovingProducts = async () => {
    try {
      await removeProductFromCart(info.id);
    } catch (error) {
      toast.error('internal server error');
    }

    if (numberOfProduct === 1) {
      dispatch({
        type: 'REMOVE_PRODUCT',
        payload: { productId: info.id, productPrice: info.price },
      });
      return;
    }
    setNumberOfProduct((prevNumberOfProduct) => prevNumberOfProduct - 1);
    dispatch({
      type: 'DECREASE_QUANTITY',
      payload: { productId: info.id, productPrice: info.price },
    });
  };

  return (
    <div className="cart-items">
      <div className="image-box">
        <img src={info.thumbnail} alt="product " />
      </div>
      <div className="about">
        <h1 className="title">{info.name}</h1>
        <h3 className="subtitle">${info.price}</h3>
      </div>
      <div className="counter">
        <button
          type="button"
          className="btn plus-btn"
          onClick={handleAddingProducts}
        >
          +
        </button>
        <div className="count">{numberOfProduct}</div>
        <button
          type="button"
          className="btn min-btn"
          onClick={handleRemovingProducts}
        >
          -
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
