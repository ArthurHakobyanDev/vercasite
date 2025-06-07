import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <div className="logo">VERCA</div>
      </div>
      <div className="right">
        <button className="header-button">Product Policy</button>
        <button className="header-button">Contact Us</button>
      </div>
    </div>
  );
};

export default Header;
