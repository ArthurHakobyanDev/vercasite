import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-highlight">VER</span>CA
        </div>
        <nav className="header-nav">
          <button className="nav-link">Product Policy</button>
          <button className="nav-button">Contact Us</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;