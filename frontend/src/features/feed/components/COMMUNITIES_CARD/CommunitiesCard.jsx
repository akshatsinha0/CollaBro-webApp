import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "../../../../design-system/atoms";
import { LoadingState, EmptyState } from "../../../../design-system/molecules";
import styles from "./CommunitiesCard.module.css";
const CommunitiesCard = memo(({ communities, isLoading, onJoin }) => {
  const handleJoin = useCallback(
    (communityId) => {
      onJoin(communityId);
    },
    [onJoin],
  );
  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Communities</h2>
      </div>
      {isLoading ? (
        <LoadingState variant="skeleton" lines={3} />
      ) : communities.length > 0 ? (
        <div className={styles.list}>
          {communities.map((community) => (
            <div key={community.id} className={styles.item}>
              <div className={styles.info}>
                <div className={styles.name}>{community.name}</div>
                <div className={styles.details}>
                  {community.category} • {community.members} members
                </div>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => handleJoin(community.id)}
                className={styles.joinButton}
              >
                Join
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState title="No communities found" />
      )}
    </Card>
  );
});
CommunitiesCard.displayName = "CommunitiesCard";
CommunitiesCard.propTypes = {
  communities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onJoin: PropTypes.func.isRequired,
};
export default CommunitiesCard;
