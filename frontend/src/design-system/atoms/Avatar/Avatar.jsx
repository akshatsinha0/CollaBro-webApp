import React from "react";
import PropTypes from "prop-types";
import { getInitials, classNames } from "../../../shared/utils";
import styles from "./Avatar.module.css";
const Avatar = ({ src, alt, name, size = "md", className }) => {
  const avatarClasses = classNames(styles.avatar, styles[size], className);
  return (
    <div className={avatarClasses}>
      {src ? (
        <img src={src} alt={alt || name} className={styles.image} />
      ) : (
        <span className={styles.initials}>{getInitials(name)}</span>
      )}
    </div>
  );
};
Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  className: PropTypes.string,
};
export default Avatar;
