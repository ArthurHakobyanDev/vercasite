import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">VERCA</div>
      <div className="header-buttons">
        <button className="contact-button">Contact Us</button>
        <button className="link-button">Product Policy</button>
      </div>
    </div>
  );
};

export default Header;
