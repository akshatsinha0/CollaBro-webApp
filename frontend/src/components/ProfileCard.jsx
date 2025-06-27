import React from 'react'
import PropTypes from 'prop-types'
import { FaEllipsisV } from 'react-icons/fa'

const ProfileCard = ({ profile, isProfileLoading }) => (
  <div className="profilecard-outer">
    {isProfileLoading ? (
      <div className="loading-placeholder">Loading profile…</div>
    ) : (
      <>
        <div className="profilecard-header">
          <span></span>
          <button className="profilecard-menu"><FaEllipsisV /></button>
        </div>
        <div className="profilecard-avatar-wrapper">
          <div className="profilecard-avatar">
            {/* Replace with actual image if available */}
            <img src={profile.avatar || '/profile-placeholder.svg'} alt="Profile" className="profilecard-avatar-img" />
          </div>
        </div>
        <div className="profilecard-stats-row">
          <div className="profilecard-stat">
            <div className="profilecard-stat-value">2.5k</div>
            <div className="profilecard-stat-label">Connections</div>
          </div>
          <div className="profilecard-stat">
            <div className="profilecard-stat-value">28</div>
            <div className="profilecard-stat-label">Projects</div>
          </div>
        </div>
        <div className="profilecard-username">@{profile.username || 'userName'}</div>
        <div className="profilecard-fullname">{profile.fullName || 'Full Name'}</div>
        <div className="profilecard-reach">Profile Reach</div>
      </>
    )}
  </div>
)

ProfileCard.propTypes = {
  profile: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string,
    fullName: PropTypes.string
  }),
  isProfileLoading: PropTypes.bool.isRequired
}

export default ProfileCard 