import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">© 2025 Verca. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <a href="mailto:support@appverca.com">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
