import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from '../../../design-system/atoms';
import styles from './ErrorBoundary.module.css';
class ErrorBoundary extends Component {
constructor(props) {
super(props);
this.state = {
hasError: false,
error: null,
errorInfo: null
};
}
static getDerivedStateFromError(error) {
return { hasError: true };
}
componentDidCatch(error, errorInfo) {
this.setState({
error,
errorInfo
});
console.error('ErrorBoundary caught an error:', error, errorInfo);
if (this.props.onError) {
this.props.onError(error, errorInfo);
}
}
handleRetry = () => {
this.setState({
hasError: false,
error: null,
errorInfo: null
});
if (this.props.onRetry) {
this.props.onRetry();
}
};
render() {
if (this.state.hasError) {
if (this.props.fallback) {
return this.props.fallback;
}
return (
<Card className={styles.errorCard}>
<div className={styles.errorContent}>
<h2 className={styles.title}>Something went wrong</h2>
<p className={styles.message}>
{this.props.message || 'An unexpected error occurred. Please try again.'}
</p>
{this.props.showDetails && this.state.error && (
<details className={styles.details}>
<summary>Error Details</summary>
<pre className={styles.errorDetails}>
{this.state.error.toString()}
{this.state.errorInfo.componentStack}
</pre>
</details>
)}
<div className={styles.actions}>
<Button onClick={this.handleRetry} variant="primary">
Try Again
</Button>
{this.props.onGoHome && (
<Button onClick={this.props.onGoHome} variant="secondary">
Go Home
</Button>
)}
</div>
</div>
</Card>
);
}
return this.props.children;
}
}
ErrorBoundary.propTypes = {
children: PropTypes.node.isRequired,
fallback: PropTypes.node,
message: PropTypes.string,
showDetails: PropTypes.bool,
onError: PropTypes.func,
onRetry: PropTypes.func,
onGoHome: PropTypes.func
};
ErrorBoundary.defaultProps = {
showDetails: false
};
export default ErrorBoundary;