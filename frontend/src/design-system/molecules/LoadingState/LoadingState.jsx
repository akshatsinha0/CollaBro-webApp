import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../../shared/utils';
import styles from './LoadingState.module.css';
const LoadingState = ({ variant = 'skeleton', lines = 3, height = 'md', className }) => {
const containerClasses = classNames(styles.container, className);
if (variant === 'skeleton') {
return (
<div className={containerClasses}>
{Array.from({ length: lines }).map((_, index) => (
<div
key={index}
className={classNames(styles.skeleton, styles[height])}
/>
))}
</div>
);
}
return (
<div className={containerClasses}>
<div className={styles.spinner} />
<span className={styles.text}>Loading...</span>
</div>
);
};
LoadingState.propTypes = {
variant: PropTypes.oneOf(['skeleton', 'spinner']),
lines: PropTypes.number,
height: PropTypes.oneOf(['sm', 'md', 'lg']),
className: PropTypes.string
};
export default LoadingState;