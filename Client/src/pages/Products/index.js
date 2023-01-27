/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './styles.css';
import { ToastContainer, toast } from 'react-toastify';
import Card from '../../Components/ProductCard/Card';
import 'react-toastify/dist/ReactToastify.css';
import { listAllProducts } from '../../api/products';
import { getCategories } from '../../api/categories';
import { sortByCategories } from '../../api/categories';
import { sortByAttribute } from '../../api/categories';

function ProductsPage() {
  const NUMBER_OF_SHOWN_PRODUCTS = 5;

  const [products, setProducts] = useState([]);
  const [productsCount, setProductsCount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [sort, setSort] = useState('');

  useEffect(() => {
    if (sort !== '' && currentCategory === 'all') {
      sortByAttribute(sort).then((res) => setProducts(res.data));
    } else {
      sortByCategories(currentCategory, sort)
        .then((res) => setProducts(res.data))
        .catch(error => toast.error('internal server error'));
    }
  }, [sort]);

  useEffect(() => {
    if (currentCategory !== 'all') {
      sortByCategories(currentCategory, sort)
        .then((res) => setProducts(res.data))
        .catch(error => toast.error('internal server error'));
    } else {
      listAllProducts(NUMBER_OF_SHOWN_PRODUCTS, offset)
        .then((res) => {
          setProducts(res.data.results);
          setProductsCount(res.data.count);
        })
        .catch(error => toast.error('internal server error'));
    }
    getCategories()
      .then((res) => setCategories(res.data))
      .catch(error => toast.error('internal server error'));
  }, [currentCategory, offset]);

  const handleSorting = (e) => {
    setSort(e.target.value);
  };

  const getBtnPaginationNumbers = () => {
    const btnCount = productsCount / NUMBER_OF_SHOWN_PRODUCTS;
    const numbersArr = [];
    for (let i = 0; i < btnCount; i += 1) {
      numbersArr.push(i + 1);
    }
    return numbersArr;
  };

  return (
    <div className="product-page">
      <div className="pagination">
        {getBtnPaginationNumbers().map((btn) => (
          <button
            type="button"
            key={btn}
            value={btn}
            onClick={(e) => {
              setOffset((e.target.value - 1) * NUMBER_OF_SHOWN_PRODUCTS);
            }}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="product-container">
        {products && products.length > 0
          ? products.map((ele) => (
              <Card product={ele} key={ele.id} />
            ))
          : 'No Products'}
      </div>
      <div className="filters">
        <h3 className="price-title">Filter By: </h3>
        <div className="price">
          <label>
            <input
              type="radio"
              className="sort-radio"
              value="price"
              name="sort"
              onClick={handleSorting}
            />
            Price
          </label>
          <label>
            <input
              type="radio"
              className="sort-radio"
              value="name"
              name="sort"
              onClick={handleSorting}
            />
            Name
          </label>
        </div>
        <h3 className="categories-title">Categories: </h3>
        <div className="categories">
          {categories.map((ele) => (
            <label htmlFor={ele.name} key={ele.name}>
            
              <input
                type="radio"
                className="radio-btn"
                id={ele.name}
                value={ele.name}
                name="categories"
                checked={currentCategory === ele.name}
                onChange={(e) => setCurrentCategory(e.target.value)}
              />
                {ele.name}
            </label>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductsPage;
