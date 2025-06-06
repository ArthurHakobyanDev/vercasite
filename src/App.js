import React from 'react';
import './App.css';
import Section from './components/Section';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header /> 
      <header className="hero">
        <h1>Where Businesses and Customers Come Together</h1>
        <p>Grow a Thriving Community. Boost Your Sales</p>
      </header>

      <Section
        image="/placeholder1.png"
        title="VISION"
        headline="Where Business Meets Community"
        description="We’re building a platform where businesses can bring their communities together—offering products and services effortlessly through a beautifully simple mobile experience."
        reverse={false}
      />

      <Section
        image="/placeholder2.png"
        title="Foster Lasting Relationships"
        headline="Building community-first businesses where every connection drives growth."
        description="Invite your loyal customers into a shared-interest community where they can connect, engage, and build lasting relationships—extending far beyond the walls of your business."
        reverse={true}
      />

      <Section
        image="/placeholder3.png"
        title="Sell Directly"
        headline="Offer Your Goods and Services Directly to Your Community"
        description="Seamlessly launch and sell vouchers to promote the goods and services your business provides."
        reverse={false}
      />

      <footer className="footer">
        <p>© 2025 Verca. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

