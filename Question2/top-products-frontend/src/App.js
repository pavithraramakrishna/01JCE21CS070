import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import logo from './logo.svg';
import './App.css';

// Import your page components
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
        <Container>
          <Routes>
            <Route path="/" element={<AllProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
