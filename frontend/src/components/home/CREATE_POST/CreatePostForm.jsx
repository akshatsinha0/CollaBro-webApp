import React, { useState } from 'react';
import { FaImage, FaVideo, FaLink } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './CreatePostForm.css';

const CreatePostForm = ({ user, onCreatePost }) => {
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postContent.trim()) {
      onCreatePost({
        content: postContent,
        timestamp: new Date().toISOString()
      });
      setPostContent('');
    }
  };

  return (
    <div className="create-post">
      <div className="post-input-container">
        <div className="user-avatar">
          {user?.avatar ? (
            <img src={user.avatar} alt={user.username} />
          ) : (
            <div className="avatar-placeholder">
              {user?.username?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="post-form">
          <textarea
            placeholder="Share your project idea..."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            rows="2"
          />
          <div className="post-actions">
            <div className="post-attachments">
              <button type="button" className="attachment-button">
                <FaImage /> Photo
              </button>
              <button type="button" className="attachment-button">
                <FaVideo /> Video
              </button>
              <button type="button" className="attachment-button">
                <FaLink /> Link
              </button>
            </div>
            <div className="post-buttons">
              <button
                type="submit"
                className="post-button"
                disabled={!postContent.trim()}
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

CreatePostForm.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string
  }),
  onCreatePost: PropTypes.func.isRequired
};

export default CreatePostForm; 