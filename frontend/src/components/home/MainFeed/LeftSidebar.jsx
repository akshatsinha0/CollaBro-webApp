import React from 'react';
import PropTypes from 'prop-types';
import ProfileCard from '../ProfileCard';
import CommunitiesCard from '../CommunitiesCard';

const LeftSidebar = ({ profile, isProfileLoading, communities, isCommunitiesLoading, onJoin }) => (
  <div className="left-sidebar">
    <ProfileCard profile={profile} isProfileLoading={isProfileLoading} />
    <CommunitiesCard
      communities={communities}
      isLoading={isCommunitiesLoading}
      onJoin={onJoin}
    />
  </div>
);

LeftSidebar.propTypes = {
  profile: PropTypes.object,
  isProfileLoading: PropTypes.bool,
  communities: PropTypes.array,
  isCommunitiesLoading: PropTypes.bool,
  onJoin: PropTypes.func.isRequired
};

export default LeftSidebar; 