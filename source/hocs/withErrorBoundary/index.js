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
        console.log(`Error Boundary (${this.props.boundaryName}):`, error, info);
        this.setState({ info });
        logErrorEvent(this.props.appName, `error-boundary-${this.props.boundaryName}`, {
            errorStack: error.stack,
            componentStack: info.componentStack,
        });
    }

    render() {
        const FallbackComponent = this.props.fallbackComponent;

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
    appName: PropTypes.string.isRequired,
    boundaryName: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    fallbackComponent: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
    ]).isRequired,
};

export default function withErrorBoundary(WrappedComponent, boundaryName, appName, FallBackComponent = InComponentErrorBoundary) {
    const Component = props => (
        <ErrorBoundary fallbackComponent={FallBackComponent} boundaryName={boundaryName} appName={appName}>
            <WrappedComponent {...props} />
        </ErrorBoundary>
    );

    return Component;
}
