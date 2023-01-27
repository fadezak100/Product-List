import React, { createContext, useReducer } from 'react';

const INITIAL_STATE = {
  cart: {
    products: [],
    total: 0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEMS_TO_CART': {
      let { total, products } = action.payload;

      return {
        cart: {
          total: total,
          products: products,
        },
      };
    }
    case 'ADD_ITEM_TO_CART': {
      const { product, quantity } = action.payload;
      const { id } = product;

      const { total, products: oldProducts } = state.cart;

      let newList = [];
      let newTotal;

      const item = oldProducts.filter((el) => el.product_list.id === id);

      if (item.length > 0) {
        item[0].quantity += 1;
        newTotal = total + Number(item[0].product_list.price);
        const old = state.cart.products;
        const oldFiltered = old.filter((el) => {
          if (el.product_list.id !== id) {
            return el;
          }
        });
        newList.push(item[0], ...oldFiltered);
      } else {
        newTotal = total + Number(product.price);
        const old = state.cart.products;
        old.push({ quantity: quantity, product_list: product });
        newList = [...old];
      }

      return {
        cart: {
          total: newTotal,
          products: [...newList],
        },
      };
    }
    case 'INCREASE_QUANTITY': {
      const { productId, productPrice } = action.payload;
      const { total, products } = state.cart;

      const newTotal = total + Number(productPrice);
      const results = products.map((el) => {
        if (el.product_list.id === productId) {
          el.quantity += 1;
        }
        return el;
      });
      return {
        cart: {
          total: newTotal,
          products: [...results],
        },
      };
    }
    case 'DECREASE_QUANTITY': {
      const { productId, productPrice } = action.payload;
      const { total, products } = state.cart;

      const newTotal = total - Number(productPrice);
      const results = products.map((el) => {
        if (el.product_list.id === productId) {
          el.quantity -= 1;
        }
        return el;
      });
      return {
        cart: {
          total: newTotal,
          products: [...results],
        },
      };
    }
    case 'REMOVE_PRODUCT': {
      const { productId, productPrice } = action.payload;
      const { total, products } = state.cart;

      const newTotal = total - Number(productPrice);

      const results = products.filter((el) => el.product_list.id !== productId);

      return {
        cart: {
          total: newTotal,
          products: [...results],
        },
      };
    }
    default: {
      return {
        cart: {
          total: state.cart.total,
          products: state.cart.product,
        },
      };
    }
  }
};
export const Context = createContext(INITIAL_STATE);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
