import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../atoms";
import { classNames } from "../../../shared/utils";
import styles from "./EmptyState.module.css";
const EmptyState = ({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  className,
}) => {
  const containerClasses = classNames(styles.container, className);
  return (
    <div className={containerClasses}>
      {Icon && <Icon className={styles.icon} />}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="primary">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
EmptyState.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
  className: PropTypes.string,
};
export default EmptyState;
