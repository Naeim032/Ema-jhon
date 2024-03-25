import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className='header'>
        <img src="/src/images/Logo.svg" alt="" />
        <div className="header-menu">
             <a href="#order">Order</a>
             <a href="#order-review">Order Review</a>
             <a href="#manage Inventory">Manage Inventory</a>
             <a href="#login">Login</a>
        </div>
    </nav>
  );
};

export default Header;