import React from 'react'
import PropTypes from 'prop-types'

const CommunitiesCard = ({ communities, isLoading, onJoin }) => (
  <div className="card communities-card">
    <div className="card-header">
      <h2 className="card-title">Communities</h2>
    </div>
    {isLoading ? (
      <div className="loading-placeholder">Loading…</div>
    ) : communities.length > 0 ? (
      <ul className="communities-list">
        {communities.map(c => (
          <li key={c.id} className="community-item">
            <div className="community-info">
              <span className="community-name">{c.name}</span>
              <span className="community-category">{c.category}</span>
              <span className="community-members">{c.members} members</span>
            </div>
            <button className="join-button" onClick={() => onJoin(c.id)}>
              Join
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <div className="empty-state">No communities found.</div>
    )}
  </div>
)

CommunitiesCard.propTypes = {
  communities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onJoin: PropTypes.func.isRequired
}

export default CommunitiesCard 