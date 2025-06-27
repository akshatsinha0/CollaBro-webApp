import React from 'react'
import PropTypes from 'prop-types'

const DiscussionCard = ({ discussion }) => (
  <div className="card discussion-card">
    <div className="card-user-header">
      <div className="user-info">
        <div className="user-avatar"></div>
        <div>
          <p className="user-name">@{discussion.author.username}</p>
          <p className="user-details">{discussion.author.location} • {discussion.postedAt}</p>
        </div>
      </div>
      <button className="options-button">⋮</button>
    </div>
    <h2 className="discussion-title">{discussion.title}</h2>
    <p className="discussion-content">{discussion.content}</p>
  </div>
)

DiscussionCard.propTypes = {
  discussion: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.shape({
      username: PropTypes.string,
      location: PropTypes.string
    }),
    title: PropTypes.string,
    content: PropTypes.string,
    postedAt: PropTypes.string
  }).isRequired
}

export default DiscussionCard 