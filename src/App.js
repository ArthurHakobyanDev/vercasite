import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import ProductPolicy from './pages/ProductPolicy';
import Footer from './components/Footer';
import GetStarted from './pages/GetStarted';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-policy" element={<ProductPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
