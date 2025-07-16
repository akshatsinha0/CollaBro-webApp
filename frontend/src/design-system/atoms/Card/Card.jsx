import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../../shared/utils';
import styles from './Card.module.css';
const Card = ({ children, variant = 'default', padding = 'md', className, onClick }) => {
const cardClasses = classNames(
styles.card,
styles[variant],
styles[`padding-${padding}`],
onClick && styles.clickable,
className
);
return (
<div className={cardClasses} onClick={onClick}>
{children}
</div>
);
};
Card.propTypes = {
children: PropTypes.node.isRequired,
variant: PropTypes.oneOf(['default', 'elevated', 'outlined']),
padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
className: PropTypes.string,
onClick: PropTypes.func
};
export default Card;