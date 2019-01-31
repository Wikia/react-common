import React from 'react';
import PropTypes from 'prop-types';

const DefaultFallback = () => (<span>Error loading</span>);

const DEFAULT_OPTIONS = {
    FallbackComponent: DefaultFallback,
    timeout: 10000,
};

const TIMER_INTERVAL = 100;

function withTimeoutFallback(Component, opts) {
    const options = { ...DEFAULT_OPTIONS, ...opts };
    const { FallbackComponent } = options;

    class TimeoutComponent extends React.PureComponent {
        static propTypes = {
            children: PropTypes.node,
        };

        static defaultProps = {
            children: null,
        };

        state = {
            time: 0,
        }

        componentDidMount() {
            this.timerID = setInterval(
                () => this.tick(),
                TIMER_INTERVAL
            );
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        tick() {
            const { time } = this.state;

            if (time > options.timeout) {
                clearInterval(this.timerID);
            } else {
                this.setState(prevState => ({ time: prevState.time + TIMER_INTERVAL }));
            }
        }

        render() {
            const { time } = this.state;
            const { children } = this.props;

            if (time > options.timeout) {
                return <FallbackComponent {...this.props}>{children}</FallbackComponent>;
            }

            return <Component {...this.props} />;
        }
    }

    return TimeoutComponent;
}

export default withTimeoutFallback;
