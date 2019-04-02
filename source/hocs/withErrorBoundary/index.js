import merge from 'lodash/merge';
import PropTypes from 'prop-types';
import React from 'react';

import logErrorEvent from '../../utils/eventLogger';

class ErrorBoundary extends React.Component {
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    state = {
        hasError: false,
        error: null,
        info: null,
    };

    componentDidCatch(error, info) {
        console.log(`Error Boundary (${this.props.name}):`, error, info);
        this.setState({ info });

        if (!this.props.skipLog) {
            logErrorEvent(this.props.appName, this.props.appVersion, `error-boundary-${this.props.name}`, {
                errorStack: error.stack,
                componentStack: info.componentStack,
            });
        }
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                const FallbackComponent = this.props.fallback;
                return <FallbackComponent error={this.state.error} info={this.state.info} />;
            }

            return null;
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    /** Front-End application's name - will be sent to the remote Fandom log */
    appName: PropTypes.string,
    /** Front-End application's version - will be sent to the remote Fandom log */
    appVersion: PropTypes.string,
    children: PropTypes.node.isRequired,
    /** A fallback component */
    fallback: PropTypes.element,
    /** Boundary's name - will be sent to the remote Fandom log */
    name: PropTypes.string.isRequired,
    /** Disable remote Fandom log */
    skipLog: PropTypes.bool,
};

ErrorBoundary.defaultProps = {
    appName: 'unnamed app',
    appVersion: 'unknown version',
    fallback: null,
    skipLog: false,
};

export default function withErrorBoundary(WrappedComponent, options = {}) {
    const defaultErrorBoundaryProps = {
        name: WrappedComponent.name,
    };

    const errorBoundaryProps = merge({}, defaultErrorBoundaryProps, options);

    const Component = props => (
        <ErrorBoundary {...errorBoundaryProps}>
            <WrappedComponent {...props} />
        </ErrorBoundary>
    );

    return Component;
}
