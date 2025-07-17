import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../../../shared/utils";
import styles from "./FeedLayout.module.css";
const FeedLayout = ({ leftSidebar, mainContent, rightSidebar, className }) => {
  const layoutClasses = classNames(styles.layout, className);
  return (
    <div className={layoutClasses}>
      {leftSidebar && (
        <aside className={styles.leftSidebar}>{leftSidebar}</aside>
      )}
      <main className={styles.mainContent}>{mainContent}</main>
      {rightSidebar && (
        <aside className={styles.rightSidebar}>{rightSidebar}</aside>
      )}
    </div>
  );
};
FeedLayout.propTypes = {
  leftSidebar: PropTypes.node,
  mainContent: PropTypes.node.isRequired,
  rightSidebar: PropTypes.node,
  className: PropTypes.string,
};
export default FeedLayout;
