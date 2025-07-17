import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "../../atoms";
import { classNames } from "../../../shared/utils";
import styles from "./UserInfo.module.css";
const UserInfo = ({
  user,
  showDetails = true,
  avatarSize = "md",
  className,
}) => {
  const containerClasses = classNames(styles.container, className);
  return (
    <div className={containerClasses}>
      <Avatar
        src={user.avatar}
        name={user.fullName || user.username}
        size={avatarSize}
      />
      {showDetails && (
        <div className={styles.details}>
          <p className={styles.username}>@{user.username}</p>
          {user.location && <p className={styles.location}>{user.location}</p>}
        </div>
      )}
    </div>
  );
};
UserInfo.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    fullName: PropTypes.string,
    avatar: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
  showDetails: PropTypes.bool,
  avatarSize: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  className: PropTypes.string,
};
export default UserInfo;
