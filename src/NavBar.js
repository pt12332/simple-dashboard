import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;
