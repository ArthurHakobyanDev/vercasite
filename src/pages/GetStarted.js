import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <div className="get-started">
      <div className="get-started-container">
        <h1 className="get-started-title">Welcome to Verca</h1>
        <p className="get-started-subtitle">
        Verca is a platform designed to empower businesses to connect with their communities—enabling you to offer products and services through beautifully simple mobile experiences and engage customers who share a passion for what you provide.
        </p>

        <div className="get-started-section">
          <h2>🚀 Launching Soon</h2>
          <p>
            We're getting ready to launch in the coming months. Our team is working hard to make sure everything is polished, seamless, and built to support your business from day one.
          </p>
        </div>

        <div className="get-started-section">
          <h2>🤝 Partner with Us</h2>
          <p>
            If you're a business interested in being one of our early partners, we’d love to connect. We’re onboarding select businesses to help shape the platform and offer exclusive early access perks.
          </p>
          <a href="mailto:support@appverca.com" className="get-started-button">
            Contact Us to Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
