import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import NavBar from './components/NavBar';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
