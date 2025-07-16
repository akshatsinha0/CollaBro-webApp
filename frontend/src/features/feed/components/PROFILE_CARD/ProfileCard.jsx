import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FaEllipsisV } from 'react-icons/fa';
import { Card, Avatar, Button } from '../../../../design-system/atoms';
import { LoadingState } from '../../../../design-system/molecules';
import styles from './ProfileCard.module.css';
const ProfileCard = memo(({ profile, isLoading }) => {
if (isLoading) {
return (
<Card className={styles.card}>
<LoadingState variant="skeleton" lines={6} />
</Card>
);
}
return (
<Card className={styles.card} padding="none">
<div className={styles.header}>
<span />
<Button variant="ghost" className={styles.menuButton}>
<FaEllipsisV />
</Button>
</div>
<div className={styles.avatarWrapper}>
<Avatar
src={profile?.avatar}
name={profile?.fullName || profile?.username}
size="xl"
className={styles.avatar}
/>
</div>
<div className={styles.userInfo}>
<div className={styles.username}>@{profile?.username || 'johnDoe'}</div>
<div className={styles.fullName}>{profile?.fullName || 'John Doe'}</div>
</div>
<div className={styles.stats}>
<div className={styles.stat}>
<div className={styles.statValue}>2,500</div>
<div className={styles.statLabel}>Connections</div>
</div>
<div className={styles.stat}>
<div className={styles.statValue}>28</div>
<div className={styles.statLabel}>Projects</div>
</div>
</div>
<div className={styles.analyticsSection}>
<h3 className={styles.analyticsTitle}>Profile Analytics</h3>
<div className={styles.analyticsGrid}>
<div className={styles.analyticItem}>
<div className={styles.analyticValue}>1,234</div>
<div className={styles.analyticLabel}>Profile Views</div>
</div>
<div className={styles.analyticItem}>
<div className={styles.analyticValue}>3,210</div>
<div className={styles.analyticLabel}>Post Reach</div>
</div>
<div className={styles.analyticItem}>
<div className={styles.analyticValue}>1,050</div>
<div className={styles.analyticLabel}>Project Reach</div>
</div>
<div className={styles.analyticItem}>
<div className={styles.analyticValue}>8.2%</div>
<div className={styles.analyticLabel}>Engagement Rate</div>
</div>
</div>
</div>
<div className={styles.reach}>Profile Reach</div>
</Card>
);
});
ProfileCard.displayName = 'ProfileCard';
ProfileCard.propTypes = {
profile: PropTypes.shape({
avatar: PropTypes.string,
username: PropTypes.string,
fullName: PropTypes.string
}),
isLoading: PropTypes.bool.isRequired
};
export default ProfileCard;