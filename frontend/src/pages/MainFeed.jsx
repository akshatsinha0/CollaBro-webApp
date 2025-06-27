import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar.jsx'
// import CreateProjectForm from '../components/home/CREATE_PROJECT/CreateProjectForm'
import LeftSidebar from '../components/home/MainFeed/LeftSidebar'
import FeedContent from '../components/home/MainFeed/FeedContent'
import RightSidebar from '../components/home/MainFeed/RightSidebar'
import useFeedData from '../components/home/MainFeed/useFeedData'
import {
  FaSearch,
  FaBell,
  FaFire,
  FaInbox,
  FaChevronDown
} from 'react-icons/fa'
import '../styles/MainFeed.css'

const MainFeed = () => {
  const {
    profile,
    isProfileLoading,
    communities,
    isCommunitiesLoading,
    projects,
    discussions,
    isFeedLoading,
    peopleRecommendations,
    isPeopleLoading,
    trendingTopics,
    isTrendingLoading,
    showProjectForm,
    handleJoinCommunity,
    handleConnectPerson,
    handlePostInteraction,
    handleCreatePost,
    handleShowProjectForm,
    handleCloseProjectForm,
    handleProjectSubmit
  } = useFeedData();

  return (
    <div className="main-feed">
      <Navbar />

      <div className="feed-layout">
        <LeftSidebar
          profile={profile}
          isProfileLoading={isProfileLoading}
          communities={communities}
          isCommunitiesLoading={isCommunitiesLoading}
          onJoin={handleJoinCommunity}
        />
        <FeedContent
          profile={profile}
          handleCreatePost={handleCreatePost}
          showProjectForm={showProjectForm}
          handleCloseProjectForm={handleCloseProjectForm}
          handleProjectSubmit={handleProjectSubmit}
          isFeedLoading={isFeedLoading}
          projects={projects}
          discussions={discussions}
          handlePostInteraction={handlePostInteraction}
        />
        <RightSidebar
          people={peopleRecommendations}
          isPeopleLoading={isPeopleLoading}
          trendingTopics={trendingTopics}
          isTrendingLoading={isTrendingLoading}
          onConnect={handleConnectPerson}
        />
      </div>
    </div>
  )
}

export default MainFeed
