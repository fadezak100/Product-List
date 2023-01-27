import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import { addProductsToCart } from '../../api/cart';
import useCart from '../../hooks/useCart';
import './style.css';

function Card({ product }) {
  const { dispatch } = useCart();
  const { id, thumbnail, category, name, price } = product;

  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      await addProductsToCart(id);
    } catch (error) {
      toast.error('internal server error');
    }
    dispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: { product: product, quantity: 1 },
    });
    toast.success('Added!');
  };

  return (
    <div className="productCard-card">
      <img src={thumbnail} alt="product" />
      <div className="info">
        <p className="productCard-category"> {category} </p>
        <p className="description">{name}</p>
        <div className="buy-info">
          <span> ${price}</span>
          <button
            type="button"
            onClick={() => {
              handleAddToCart(id);
            }}
          >
            Add{' '}
          </button>
          <button onClick={() => navigate(`/product/${id}`)} type="button">
            View
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Card;
