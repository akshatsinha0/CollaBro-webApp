import React, { memo } from 'react';
import { FeedLayout } from '../../design-system/templates';
import { LeftSidebar, RightSidebar, FeedContent } from './components';
import { useFeedData } from './hooks/useFeedData';
import ErrorBoundary from '../../shared/components/ErrorBoundary';
import Navbar from '../../pages/Navbar';
import styles from './MainFeed.module.css';
const MainFeed = memo(() => {
const feedData = useFeedData();
const leftSidebarProps = {
profile: feedData.profile,
isProfileLoading: feedData.isProfileLoading,
communities: feedData.communities,
isCommunitiesLoading: feedData.isCommunitiesLoading,
onJoin: feedData.handleJoinCommunity
};
const rightSidebarProps = {
people: feedData.peopleRecommendations,
isPeopleLoading: feedData.isPeopleLoading,
trendingTopics: feedData.trendingTopics,
isTrendingLoading: feedData.isTrendingLoading,
onConnect: feedData.handleConnectPerson
};
const feedContentProps = {
profile: feedData.profile,
handleCreatePost: feedData.handleCreatePost,
showProjectForm: feedData.showProjectForm,
handleCloseProjectForm: feedData.handleCloseProjectForm,
handleProjectSubmit: feedData.handleProjectSubmit,
handleShowProjectForm: feedData.handleShowProjectForm,
isFeedLoading: feedData.isFeedLoading,
projects: feedData.projects,
discussions: feedData.discussions,
handlePostInteraction: feedData.handlePostInteraction
};
return (
<div className={styles.mainFeed}>
<Navbar />
<ErrorBoundary message="Unable to load the main feed">
<FeedLayout
leftSidebar={<LeftSidebar {...leftSidebarProps} />}
mainContent={<FeedContent {...feedContentProps} />}
rightSidebar={<RightSidebar {...rightSidebarProps} />}
/>
</ErrorBoundary>
</div>
);
});
MainFeed.displayName = 'MainFeed';
export default MainFeed;