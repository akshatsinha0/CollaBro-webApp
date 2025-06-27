import React from 'react'
import PropTypes from 'prop-types'
import { FaRegHeart, FaRegCommentAlt, FaShareAlt } from 'react-icons/fa'

const ProjectCard = ({ project, onPostInteraction }) => (
  <div className="card project-card">
    <div className="card-user-header">
      <div className="user-info">
        <div className="user-avatar"></div>
        <div>
          <p className="user-name">@{project.author.username}</p>
          <p className="user-details">{project.author.location} • {project.postedAt}</p>
        </div>
      </div>
      <button className="options-button">⋮</button>
    </div>
    <h2 className="project-title">{project.title}</h2>
    <div className="project-image"></div>
    <div className="project-actions">
      <button className="action-button" onClick={() => onPostInteraction(project.id, 'like')}><FaRegHeart /></button>
      <button className="action-button" onClick={() => onPostInteraction(project.id, 'comment')}><FaRegCommentAlt /></button>
      <button className="action-button" onClick={() => onPostInteraction(project.id, 'share')}><FaShareAlt /></button>
    </div>
  </div>
)

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.shape({
      username: PropTypes.string,
      location: PropTypes.string
    }),
    title: PropTypes.string,
    postedAt: PropTypes.string
  }).isRequired,
  onPostInteraction: PropTypes.func.isRequired
}

export default ProjectCard 