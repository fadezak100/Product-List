import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { productDetails } from '../../api/products';
import { addProductsToCart } from '../../api/cart';
import { ToastContainer, toast } from 'react-toastify';
import useCart from '../../hooks/useCart';

function SingleProduct() {
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();
  const { id } = useParams();

  useEffect(() => {
    const getProductsDetails = async () => {
      productDetails(id).then((res) => setProduct(res.data));
    };
    getProductsDetails();
  }, [id]);

  const handleAddProductToCart = async () => {
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
    <>
      <div className="product-container">
        <div className="product-info-div">
          {product && <h1 className="product-title">{product.name}</h1>}
          {product && (
            <p className="product-category">{product.category_name}</p>
          )}
          {product && (
            <p className="product-description"> {product.description}</p>
          )}
          <div className="btn-div">
            <button
              onClick={handleAddProductToCart}
              className="btn-class cart-btn"
            >
              Add to cart!
            </button>
          </div>
        </div>
        <div className="product-img-div">
          {product && (
            <img
              className="img"
              src={product.thumbnail}
              alt={product.name}
              cursor
            />
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default SingleProduct;
