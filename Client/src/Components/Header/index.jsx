import './style.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <h1 className="header-title">Assignment #1</h1>
        <nav>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'active' : 'in-active')}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? 'active' : 'in-active')}
          >
            Products
          </NavLink>
  
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? 'active' : 'in-active')}
            >
              Cart
            </NavLink>
        </nav>
            <p>Hello</p>
      </div>
    </header>
  );
}

export default Header;
