import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";
import {
  FaRegHeart,
  FaRegCommentAlt,
  FaShareAlt,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import { Card, Button } from "../../../../design-system/atoms";
import { UserInfo } from "../../../../design-system/molecules";
import styles from "./ProjectCard.module.css";
const ProjectCard = memo(({ project, onPostInteraction }) => {
  const handleLike = useCallback(() => {
    onPostInteraction(project.id, "like");
  }, [project.id, onPostInteraction]);
  const handleComment = useCallback(() => {
    onPostInteraction(project.id, "comment");
  }, [project.id, onPostInteraction]);
  const handleShare = useCallback(() => {
    onPostInteraction(project.id, "share");
  }, [project.id, onPostInteraction]);
  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <UserInfo
          user={{
            username: project.author.username,
            location: `${project.author.location} • ${project.postedAt}`,
          }}
          avatarSize="md"
        />
        <Button variant="ghost" className={styles.optionsButton}>
          ⋮
        </Button>
      </div>
      <h2 className={styles.title}>{project.title}</h2>
      {project.description && (
        <p className={styles.description}>{project.description}</p>
      )}
      {project.projectType && (
        <div className={styles.projectMeta}>
          <span className={styles.projectType}>{project.projectType}</span>
          {project.duration && (
            <span className={styles.duration}>
              <FaClock /> {project.duration} months
            </span>
          )}
          {project.collaborators && project.collaborators.length > 0 && (
            <span className={styles.collaborators}>
              <FaUsers /> {project.collaborators.length} collaborator
              {project.collaborators.length > 1 ? "s" : ""}
            </span>
          )}
        </div>
      )}
      {project.collaborators && project.collaborators.length > 0 && (
        <div className={styles.skillsSection}>
          <h4 className={styles.skillsTitle}>Required Skills:</h4>
          <div className={styles.skillsContainer}>
            {project.collaborators.map((collab, index) =>
              collab.skills.map((skill) => (
                <span key={`${index}-${skill}`} className={styles.skillTag}>
                  {skill}
                </span>
              )),
            )}
          </div>
        </div>
      )}
      {project.image && (
        <div className={styles.imageContainer}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.actions}>
        <Button
          variant="ghost"
          onClick={handleLike}
          className={styles.actionButton}
        >
          <FaRegHeart />
          <span>{project.likes || 0}</span>
        </Button>
        <Button
          variant="ghost"
          onClick={handleComment}
          className={styles.actionButton}
        >
          <FaRegCommentAlt />
          <span>{project.comments || 0}</span>
        </Button>
        <Button
          variant="ghost"
          onClick={handleShare}
          className={styles.actionButton}
        >
          <FaShareAlt />
        </Button>
      </div>
    </Card>
  );
});
ProjectCard.displayName = "ProjectCard";
ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.shape({
      username: PropTypes.string,
      location: PropTypes.string,
    }),
    title: PropTypes.string,
    description: PropTypes.string,
    projectType: PropTypes.string,
    duration: PropTypes.number,
    collaborators: PropTypes.array,
    image: PropTypes.string,
    postedAt: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.number,
  }).isRequired,
  onPostInteraction: PropTypes.func.isRequired,
};
export default ProjectCard;
