import React from 'react';
import PropTypes from 'prop-types';
import CreatePostForm from '../CREATE_POST/CreatePostForm';
import CreateProjectPopup from '../CREATE_PROJECT/CreateProjectPopup';
import ProjectCard from '../ProjectCard';
import DiscussionCard from '../DiscussionCard';
import { FaInbox } from 'react-icons/fa';

const FeedContent = ({
  profile,
  handleCreatePost,
  showProjectForm,
  handleCloseProjectForm,
  handleProjectSubmit,
  isFeedLoading,
  projects,
  discussions,
  handlePostInteraction
}) => (
  <div className="main-content">
    <div className="create-post-container">
      <CreatePostForm user={profile} onCreatePost={handleCreatePost} />
    </div>
    <CreateProjectPopup
      show={showProjectForm}
      onClose={handleCloseProjectForm}
      onSubmit={handleProjectSubmit}
    />
    {isFeedLoading ? (
      <div className="loading-placeholder">Loading feed…</div>
    ) : (
      <>
        {projects.length > 0 ? (
          projects.map(p => (
            <ProjectCard key={p.id} project={p} onPostInteraction={handlePostInteraction} />
          ))
        ) : (
          <div className="card empty-state">
            <FaInbox className="empty-state-icon" />
            <p className="empty-state-text">No projects in your feed yet.</p>
            <button className="empty-state-button">Explore Projects</button>
          </div>
        )}
        {discussions.length > 0 && discussions.map(d => (
          <DiscussionCard key={d.id} discussion={d} />
        ))}
      </>
    )}
  </div>
);

FeedContent.propTypes = {
  profile: PropTypes.object,
  handleCreatePost: PropTypes.func.isRequired,
  showProjectForm: PropTypes.bool.isRequired,
  handleCloseProjectForm: PropTypes.func.isRequired,
  handleProjectSubmit: PropTypes.func.isRequired,
  isFeedLoading: PropTypes.bool.isRequired,
  projects: PropTypes.array.isRequired,
  discussions: PropTypes.array.isRequired,
  handlePostInteraction: PropTypes.func.isRequired
};

export default FeedContent; 