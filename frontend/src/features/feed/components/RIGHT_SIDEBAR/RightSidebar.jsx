import React from 'react';
import PropTypes from 'prop-types';
import UpgradeCard from '../UPGRADE_CARD';
import PeopleCard from '../PEOPLE_CARD';
import TrendingTopicsCard from '../TRENDING_TOPICS_CARD';
import styles from './RightSidebar.module.css';
const RightSidebar = ({ people, isPeopleLoading, trendingTopics, isTrendingLoading, onConnect }) => (
<div className={styles.sidebar}>
<UpgradeCard />
<PeopleCard
people={people}
isLoading={isPeopleLoading}
onConnect={onConnect}
/>
<TrendingTopicsCard
topics={trendingTopics}
isLoading={isTrendingLoading}
/>
</div>
);
RightSidebar.propTypes = {
people: PropTypes.array,
isPeopleLoading: PropTypes.bool,
trendingTopics: PropTypes.array,
isTrendingLoading: PropTypes.bool,
onConnect: PropTypes.func.isRequired
};
export default RightSidebar;