import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
