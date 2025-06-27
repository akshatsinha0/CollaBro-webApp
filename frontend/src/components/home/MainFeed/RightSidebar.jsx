import React from 'react';
import PropTypes from 'prop-types';
import UpgradeCard from '../UpgradeCard';
import PeopleCard from '../PeopleCard';
import TrendingTopicsCard from '../TrendingTopicsCard';

const RightSidebar = ({ people, isPeopleLoading, trendingTopics, isTrendingLoading, onConnect }) => (
  <div className="right-sidebar">
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