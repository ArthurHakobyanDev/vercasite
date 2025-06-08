import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => navigate('/')}>
          <span className="logo-highlight">VER</span>CA
        </div>
        <nav className="header-nav">
          <button className="nav-link" onClick={() => navigate('/product-policy')}>
            Product Policy
          </button>
          <a className="nav-button" href="mailto:arthurhakobyan1@gmail.com">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
