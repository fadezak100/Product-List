import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { getAllCartItems } from './api/cart';
import useCart from './hooks/useCart';
import { Header, LandingCard, Cart, Error, SingleProduct } from './Components';
import { ProductsPage } from './pages';

function App() {
  const { dispatch } = useCart();

  useEffect(() => {
    const getItems = async () => {
      getAllCartItems()
      .then((res) => {
        const totalPrice = res.data.reduce(
          (acc, v) => acc + v.product_list.price * v.quantity,
          0
        );

        dispatch({
          type: 'ADD_ITEMS_TO_CART',
          payload: { total: totalPrice, products: res.data },
        });
      })
      .catch(error => toast.error('internal server error'));
    }
    getItems()
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route end path="/" element={<LandingCard />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
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

export default App;
