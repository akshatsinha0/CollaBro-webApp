import React from "react";
import PropTypes from "prop-types";
import ProfileCard from "../PROFILE_CARD";
import CommunitiesCard from "../COMMUNITIES_CARD";
import styles from "./LeftSidebar.module.css";
const LeftSidebar = ({
  profile,
  isProfileLoading,
  communities,
  isCommunitiesLoading,
  onJoin,
}) => (
  <div className={styles.sidebar}>
    <ProfileCard profile={profile} isLoading={isProfileLoading} />
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
  onJoin: PropTypes.func.isRequired,
};
export default LeftSidebar;
