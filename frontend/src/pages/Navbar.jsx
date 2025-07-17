import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaChevronDown,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const name = localStorage.getItem("onboard_fullName");
    if (name) setUserName(name);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logo">COLLABRO</div>

      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      <div className="user-section">
        <FaBell className="notification-icon" />
        <div className="user-profile" ref={dropdownRef}>
          <FaUserCircle className="user-icon" />
          <span
            className="user-name"
            onClick={() => setDropdownOpen((v) => !v)}
          >
            Hello, {userName}
          </span>
          <FaChevronDown
            className="chevron-icon"
            onClick={() => setDropdownOpen((v) => !v)}
          />
          {dropdownOpen && (
            <div className="user-dropdown">
              <div
                className="dropdown-item"
                onClick={() => setDropdownOpen(false)}
              >
                Profile
              </div>
              <div className="dropdown-item" onClick={handleLogout}>
                Logout <FaSignOutAlt className="dropdown-logout-icon" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
