import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FaInbox } from 'react-icons/fa';
import CreatePostForm from '../CREATE_POST_FORM';
import CreateProjectPopup from '../CREATE_PROJECT_POPUP';
import ProjectCard from '../PROJECT_CARD';
import DiscussionCard from '../DISCUSSION_CARD';
import FeedErrorBoundary from '../FEED_ERROR_BOUNDARY';
import { EmptyState, LoadingState } from '../../../../design-system/molecules';
import styles from './FeedContent.module.css';
const FeedContent = memo(({
profile,
handleCreatePost,
showProjectForm,
handleCloseProjectForm,
handleProjectSubmit,
handleShowProjectForm,
isFeedLoading,
projects,
discussions,
handlePostInteraction
}) => (
<div className={styles.content}>
<div className={styles.createPostContainer}>
<CreatePostForm
user={profile}
onCreatePost={handleCreatePost}
onShowProjectForm={handleShowProjectForm}
/>
</div>
<CreateProjectPopup
show={showProjectForm}
onClose={handleCloseProjectForm}
onSubmit={handleProjectSubmit}
/>
<FeedErrorBoundary>
{isFeedLoading ? (
<LoadingState variant="skeleton" lines={3} />
) : (
<div className={styles.feedItems}>
{projects.length > 0 ? (
projects.map(project => (
<ProjectCard
key={project.id}
project={project}
onPostInteraction={handlePostInteraction}
/>
))
) : (
<EmptyState
icon={FaInbox}
title="No projects in your feed yet"
description="Start by creating your first project or explore existing ones."
actionLabel="Explore Projects"
/>
)}
{discussions.length > 0 && discussions.map(discussion => (
<DiscussionCard key={discussion.id} discussion={discussion} />
))}
</div>
)}
</FeedErrorBoundary>
</div>
));
FeedContent.displayName = 'FeedContent';
FeedContent.propTypes = {
profile: PropTypes.object,
handleCreatePost: PropTypes.func.isRequired,
showProjectForm: PropTypes.bool.isRequired,
handleCloseProjectForm: PropTypes.func.isRequired,
handleProjectSubmit: PropTypes.func.isRequired,
handleShowProjectForm: PropTypes.func.isRequired,
isFeedLoading: PropTypes.bool.isRequired,
projects: PropTypes.array.isRequired,
discussions: PropTypes.array.isRequired,
handlePostInteraction: PropTypes.func.isRequired
};
export default FeedContent;