import React from 'react'
import PropTypes from 'prop-types'
import { FaChevronDown } from 'react-icons/fa'

const PeopleCard = ({ people, isLoading, onConnect }) => (
  <div className="card people-card">
    <div className="card-header">
      <h2 className="card-title">People you may know</h2>
      <button className="icon-button"><FaChevronDown /></button>
    </div>
    {isLoading ? (
      <div className="loading-placeholder">Loading…</div>
    ) : people.length > 0 ? (
      <>
        {people.map(p => (
          <div className="person-item" key={p.id}>
            <div className="person-info">
              <div className="person-avatar"></div>
              <div>
                <p className="person-name">@{p.username}</p>
                <p className="person-details">{p.profession} • {p.location}</p>
              </div>
            </div>
            <button className="add-button" onClick={() => onConnect(p.id)}>+</button>
          </div>
        ))}
        <button className="show-all-button">Show all</button>
      </>
    ) : (
      <div className="empty-state">No recommendations yet.</div>
    )}
  </div>
)

PeopleCard.propTypes = {
  people: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onConnect: PropTypes.func.isRequired
}

export default PeopleCard 