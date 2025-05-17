import React from 'react'
import { FaSearch, FaBell, FaUserCircle, FaChevronDown } from "react-icons/fa";
import '../styles/Navbar.css';

const Navbar = () => {
    return (
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">COLLABRO</div>
  
        {/* Search Bar */}
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
        </div>
  
        {/* Notification and User Section */}
        <div className="user-section">
          <FaBell className="notification-icon" />
          <div className="user-profile">
            <FaUserCircle className="user-icon" />
            <span className="user-name">Hello, User</span>
            <FaChevronDown className="chevron-icon" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  