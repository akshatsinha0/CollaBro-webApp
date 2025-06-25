import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaChevronDown,
  FaSignOutAlt
} from 'react-icons/fa'
import '../styles/Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login', { replace: true })
  }

  return (
    <div className="navbar-container">
      <div className="navbar-logo">COLLABRO</div>

      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        />
      </div>

      <div className="user-section">
        <FaBell className="notification-icon" />
        <div className="user-profile">
          <FaUserCircle className="user-icon" />
          <span className="user-name">Hello, User</span>
          <FaChevronDown className="chevron-icon" />
          <FaSignOutAlt
            className="logout-icon"
            title="Logout"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
