import React from 'react';
import PropTypes from 'prop-types';
import { FaExclamationTriangle } from 'react-icons/fa';
import ErrorBoundary from '../../../../shared/components/ErrorBoundary';
import { EmptyState } from '../../../../design-system/molecules';
const FeedErrorBoundary = ({ children, onRetry }) => {
const fallback = (
<EmptyState
icon={FaExclamationTriangle}
title="Feed Error"
description="Something went wrong while loading your feed. Please try refreshing the page."
actionLabel="Retry"
onAction={onRetry}
/>
);
return (
<ErrorBoundary
fallback={fallback}
message="Unable to load feed content"
onRetry={onRetry}
>
{children}
</ErrorBoundary>
);
};
FeedErrorBoundary.propTypes = {
children: PropTypes.node.isRequired,
onRetry: PropTypes.func
};
export default FeedErrorBoundary;