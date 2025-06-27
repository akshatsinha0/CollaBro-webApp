import React from 'react'
import PropTypes from 'prop-types'
import { FaChevronDown, FaUserCircle } from 'react-icons/fa'

const ProfileCard = ({ profile, isProfileLoading }) => (
  <div className="card profile-card">
    {isProfileLoading ? (
      <div className="loading-placeholder">Loading profile…</div>
    ) : (
      <>
        <div className="profile-header">
          <button className="menu-button">
            <FaChevronDown />
          </button>
        </div>
        <div className="profile-content">
          <div className="avatar">
            {profile.avatar || <FaUserCircle size={64} />}
          </div>
          <p className="username">@{profile.username}</p>
          <h2 className="fullname">{profile.fullName}</h2>
          <p className="details">{profile.city} • {profile.organization}</p>
        </div>
        <div className="profile-stats">
          <div className="stat-item">
            <p className="stat-value">{profile.domains.length}</p>
            <p className="stat-label">Domains</p>
          </div>
          <div className="stat-item">
            <p className="stat-value">{profile.category}</p>
            <p className="stat-label">Category</p>
          </div>
        </div>
      </>
    )}
  </div>
)

ProfileCard.propTypes = {
  profile: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string,
    fullName: PropTypes.string,
    city: PropTypes.string,
    organization: PropTypes.string,
    domains: PropTypes.array,
    category: PropTypes.string
  }),
  isProfileLoading: PropTypes.bool.isRequired
}

export default ProfileCard 