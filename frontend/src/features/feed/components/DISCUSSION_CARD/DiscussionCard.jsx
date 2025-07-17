import React, { memo } from "react";
import PropTypes from "prop-types";
import { Card } from "../../../../design-system/atoms";
import { UserInfo } from "../../../../design-system/molecules";
import styles from "./DiscussionCard.module.css";
const DiscussionCard = memo(({ discussion }) => (
  <Card className={styles.card}>
    <div className={styles.header}>
      <UserInfo
        user={{
          username: discussion.author.username,
          location: `${discussion.author.location} • ${discussion.postedAt}`,
        }}
        avatarSize="md"
      />
    </div>
    <h2 className={styles.title}>{discussion.title}</h2>
    <p className={styles.content}>{discussion.content}</p>
  </Card>
));
DiscussionCard.displayName = "DiscussionCard";
DiscussionCard.propTypes = {
  discussion: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.shape({
      username: PropTypes.string,
      location: PropTypes.string,
    }),
    title: PropTypes.string,
    content: PropTypes.string,
    postedAt: PropTypes.string,
  }).isRequired,
};
export default DiscussionCard;
