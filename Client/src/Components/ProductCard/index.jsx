// import './style.css';
// import { useEffect, useState } from 'react';
// import Card from './Card';
// import fetchingProduct from './fetch';

// function ProductCard({ setCart }) {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     fetchingProduct().then((data) => setProducts(data.slice(0, 4)));
//   }, []);

//   if (products.length) {
//     return (
//       <div className="product-container">
//         <h2>Hot products: </h2>
//         <div className="productCard-container">
//           {products.map((ele) => (
//             <Card product={ele} key={ele.id} setCart={setCart} />
//           ))}
//         </div>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//           <path
//             fill="#bfe1e5"
//             fillOpacity="1"
//             d="M0,128L24,149.3C48,171,96,213,144,197.3C192,181,240,107,288,112C336,117,384,203,432,202.7C480,203,528,117,576,112C624,107,672,181,720,192C768,203,816,149,864,138.7C912,128,960,160,1008,170.7C1056,181,1104,171,1152,186.7C1200,203,1248,245,1296,245.3C1344,245,1392,203,1416,181.3L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
//           />
//         </svg>
//       </div>
//     );
//   }
//   return <h1> No Product </h1>;
// }

// export default ProductCard;
