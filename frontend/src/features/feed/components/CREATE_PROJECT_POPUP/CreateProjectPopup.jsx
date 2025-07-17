import React, { memo, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { Card, Button } from "../../../../design-system/atoms";
import CreateProjectForm from "../CREATE_PROJECT_FORM";
import styles from "./CreateProjectPopup.module.css";
const CreateProjectPopup = memo(({ show, onClose, onSubmit }) => {
  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );
  const handleEscapeKey = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );
  useEffect(() => {
    if (show) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [show, handleEscapeKey]);
  if (!show) return null;
  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.container}>
        <Card className={styles.card} padding="lg">
          <div className={styles.header}>
            <h2 className={styles.title}>Create New Project</h2>
            <Button
              variant="ghost"
              onClick={onClose}
              className={styles.closeButton}
              aria-label="Close"
            >
              <FaTimes />
            </Button>
          </div>
          <CreateProjectForm onClose={onClose} onSubmit={onSubmit} />
        </Card>
      </div>
    </div>
  );
});
CreateProjectPopup.displayName = "CreateProjectPopup";
CreateProjectPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default CreateProjectPopup;
