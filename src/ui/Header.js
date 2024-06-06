// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'; // We will create this CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/page2" className="nav-link">Page 2</Link>
      </nav>
      <div className="logo-container">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
