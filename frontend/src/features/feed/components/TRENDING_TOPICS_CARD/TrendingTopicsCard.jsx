import React, { memo } from "react";
import PropTypes from "prop-types";
import { FaFire } from "react-icons/fa";
import { Card } from "../../../../design-system/atoms";
import { LoadingState, EmptyState } from "../../../../design-system/molecules";
import styles from "./TrendingTopicsCard.module.css";
const TrendingTopicsCard = memo(({ topics, isLoading }) => (
  <Card className={styles.card}>
    <div className={styles.header}>
      <h2 className={styles.title}>
        <FaFire className={styles.icon} />
        Trending Topics
      </h2>
    </div>
    {isLoading ? (
      <LoadingState variant="skeleton" lines={3} />
    ) : topics.length > 0 ? (
      <div className={styles.list}>
        {topics.map((topic) => (
          <div key={topic.id} className={styles.item}>
            <div className={styles.topicTitle}>{topic.title}</div>
            <div className={styles.topicSubtitle}>{topic.subtitle}</div>
          </div>
        ))}
      </div>
    ) : (
      <EmptyState title="No trending topics yet" />
    )}
  </Card>
));
TrendingTopicsCard.displayName = "TrendingTopicsCard";
TrendingTopicsCard.propTypes = {
  topics: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default TrendingTopicsCard;
