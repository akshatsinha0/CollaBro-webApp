import React from 'react'
import PropTypes from 'prop-types'
import { FaFire } from 'react-icons/fa'

const TrendingTopicsCard = ({ topics, isLoading }) => (
  <div className="card trending-card">
    <div className="card-header">
      <h2 className="card-title"><FaFire /> Trending Topics</h2>
    </div>
    {isLoading ? (
      <div className="loading-placeholder">Loading…</div>
    ) : topics.length > 0 ? (
      <ul className="trending-list">
        {topics.map(t => (
          <li key={t.id} className="trending-item">
            <div className="trending-title">{t.title}</div>
            <div className="trending-details">{t.subtitle}</div>
          </li>
        ))}
      </ul>
    ) : (
      <div className="empty-state">No trending topics yet.</div>
    )}
  </div>
)

TrendingTopicsCard.propTypes = {
  topics: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default TrendingTopicsCard 