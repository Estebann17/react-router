
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MyApp</h1>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/profile" className="nav-link">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
