import './style.css';
import { Link } from 'react-router-dom';

import product from './img/product.png';

function LandingCard() {
  return (
    <>
      <div className="header-landing">
        <div className="title-product">
          <h1>Assignment #1</h1>
          <div className="paragraph">
            <p>
              Lorem ipsum dolor sit amet,consectetuer adipiscing elit,sed diam
            </p>
            <p>
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              volutpat.
            </p>
            <p>
              Lorem ipsum dolor sit amet,consectetuer adipiscing elit,sed diam
            </p>
            <p>
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              volutpat.
            </p>
          </div>
          <div className="buttons-div">
            <Link to="/products">
              <button type="button" className="button-one">
                Get Started <span>&#8594;</span>
              </button>{' '}
            </Link>
          </div>
        </div>
        <div>
          <img src={product} className="img-product" alt="product" />
        </div>
      </div>
    </>
  );
}

export default LandingCard;
