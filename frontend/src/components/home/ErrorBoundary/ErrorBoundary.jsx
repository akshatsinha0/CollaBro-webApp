import './ErrorBoundary.css'
import React from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null })
    if (this.props.onReset) this.props.onReset()
    else window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <h1>Something went wrong.</h1>
          <p className="error-message">
            {this.state.error?.message || 'An unexpected error occurred.'}
          </p>
          <button
            onClick={this.handleReload}
            className="error-retry-button"
          >
            Try Again
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
  onReset: PropTypes.func
}
