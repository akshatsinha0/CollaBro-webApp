import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCrown } from 'react-icons/fa';
import { Card, Button } from '../../../../design-system/atoms';
import styles from './UpgradeCard.module.css';
const UpgradeCard = memo(() => {
const navigate = useNavigate();
const handleSubscribeClick = useCallback(() => {
navigate('/subscribe');
}, [navigate]);
return (
<Card className={styles.card}>
<div className={styles.header}>
<h3 className={styles.title}>Premium Features</h3>
<Button 
variant="secondary" 
className={styles.subscribeButton}
onClick={handleSubscribeClick}
>
<FaCrown className={styles.crownIcon} />
Subscribe
</Button>
</div>
<div className={styles.content}>
<h4 className={styles.upgradeTitle}>Upgrade to pro</h4>
<ul className={styles.featureList}>
<li className={styles.feature}>• Priority project matching</li>
<li className={styles.feature}>• Advanced search</li>
<li className={styles.feature}>• Unlimited connections</li>
</ul>
<Button variant="primary" className={styles.upgradeButton}>
Try Free for 14 days
</Button>
</div>
</Card>
);
});
UpgradeCard.displayName = 'UpgradeCard';
export default UpgradeCard;