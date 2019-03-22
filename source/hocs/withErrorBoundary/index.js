import * as deepmerge from 'deepmerge';
import PropTypes from 'prop-types';
import React from 'react';

import logErrorEvent from '../../utils/eventLogger';

import InComponentErrorBoundary from './InComponentError';

class ErrorBoundary extends React.Component {
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            info: null,
        };
    }

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
        const FallbackComponent = this.props.fallbackComponent === undefined ? InComponentErrorBoundary : this.props.fallbackComponent;

        if (this.state.hasError) {
            if (!FallbackComponent) {
                return false;
            }

            return <FallbackComponent error={this.state.error} info={this.state.info} />;
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
    /** Custom fallback component */
    fallbackComponent: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
    ]).isRequired,
    /** Boundary's name - will be sent to the remote Fandom log */
    name: PropTypes.string.isRequired,
    /** Disable remote Fandom log */
    skipLog: PropTypes.bool,
};

ErrorBoundary.defaultProps = {
    appName: 'unnamed app',
    appVersion: 'unknown version',
    skipLog: false,
};

export default function withErrorBoundary(WrappedComponent, options = {}) {
    const defaultErrorBoundaryProps = {
        name: WrappedComponent.name,
        fallbackComponent: InComponentErrorBoundary,
    };

    const errorBoudaryProps = deepmerge.all([defaultErrorBoundaryProps, options]);

    const Component = props => (
        <ErrorBoundary {...errorBoudaryProps}>
            <WrappedComponent {...props} />
        </ErrorBoundary>
    );

    return Component;
}
