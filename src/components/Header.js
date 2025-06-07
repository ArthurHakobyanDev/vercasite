import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">VERCA</div>
      <div className="header-buttons">
        <button className="header-button">Contact Us</button>
        <button className="header-button">Product Policy</button>
      </div>
    </div>
  );
};

export default Header;
