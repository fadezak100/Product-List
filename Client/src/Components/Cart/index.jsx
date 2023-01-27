// import { useEffect } from 'react';
import ProductCart from './ProductCart';
import './style.css';
import useCart from '../../hooks/useCart';

export default function Cart() {
  const { total, products } = useCart()

  return (
    <div className="cart-container">
      <div className="header">
        <h3 className="heading">Shopping Cart</h3>
        <button type="button"> Total price ${total}</button>
      </div>
      {products.length > 0
        ? products.map((ele, i) => (
            <ProductCart quantity={ele.quantity} key={ele.product_list.id} info={ele.product_list} index={i} />
          ))
        : <p className='empty-cart'>Empty Cart :(</p>}
    </div>
  );
}
