import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import LoadingState from "../LoadingState";
import { classNames } from "../../../shared/utils";
import styles from "./ProgressiveLoader.module.css";
const ProgressiveLoader = memo(
  ({ children, isLoading, skeleton, delay = 0, className }) => {
    const [showContent, setShowContent] = useState(!isLoading && delay === 0);
    useEffect(() => {
      if (!isLoading) {
        if (delay > 0) {
          const timer = setTimeout(() => {
            setShowContent(true);
          }, delay);
          return () => clearTimeout(timer);
        } else {
          setShowContent(true);
        }
      } else {
        setShowContent(false);
      }
    }, [isLoading, delay]);
    const containerClasses = classNames(styles.container, className);
    if (isLoading || !showContent) {
      return (
        <div className={containerClasses}>
          {skeleton || <LoadingState variant="skeleton" />}
        </div>
      );
    }
    return <div className={containerClasses}>{children}</div>;
  }
);
ProgressiveLoader.displayName = "ProgressiveLoader";
ProgressiveLoader.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  skeleton: PropTypes.node,
  delay: PropTypes.number,
  className: PropTypes.string,
};
export default ProgressiveLoader;
