import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown } from 'react-icons/fa';
import { Card, Button } from '../../../../design-system/atoms';
import { LoadingState, EmptyState, UserInfo } from '../../../../design-system/molecules';
import styles from './PeopleCard.module.css';
const PeopleCard = memo(({ people, isLoading, onConnect }) => {
const handleConnect = useCallback((personId) => {
onConnect(personId);
}, [onConnect]);
return (
<Card className={styles.card}>
<div className={styles.header}>
<h2 className={styles.title}>People you may know</h2>
<Button variant="ghost" className={styles.expandButton}>
<FaChevronDown />
</Button>
</div>
{isLoading ? (
<LoadingState variant="skeleton" lines={3} />
) : people.length > 0 ? (
<>
<div className={styles.list}>
{people.map(person => (
<div key={person.id} className={styles.item}>
<UserInfo
user={{
username: person.username,
location: `${person.profession} • ${person.location}`
}}
avatarSize="sm"
/>
<Button
variant="secondary"
size="sm"
onClick={() => handleConnect(person.id)}
className={styles.connectButton}
>
+
</Button>
</div>
))}
</div>
<Button variant="ghost" className={styles.showAllButton}>
Show all
</Button>
</>
) : (
<EmptyState title="No recommendations yet" />
)}
</Card>
);
});
PeopleCard.displayName = 'PeopleCard';
PeopleCard.propTypes = {
people: PropTypes.array.isRequired,
isLoading: PropTypes.bool.isRequired,
onConnect: PropTypes.func.isRequired
};
export default PeopleCard;