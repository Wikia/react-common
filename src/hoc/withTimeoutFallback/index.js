import React from 'react';
import PropTypes from 'prop-types';

const DefaultFallback = () => (<span>Error loading</span>);

const DEFAULT_OPTIONS = {
  FallbackComponent: DefaultFallback,
  timeout: 10000,
};

const TIMER_INTERVAL = 100;

// TODO: CAKE-3226 Consider adding to react design system
function withTimeoutComponent(Component, opts) {
  const options = {...DEFAULT_OPTIONS, ...opts};
  const FallbackComponent = options.FallbackComponent;

  class TimeoutComponent extends React.PureComponent {
    static propTypes = {
      children: PropTypes.node,
    };

    static defaultProps = {
      children: '',
    };

    state = {
      time: 0,
    };

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
      if (this.state.time > options.timeout) {
        clearInterval(this.timerID);
      } else {
        this.setState(prevState => ({time: prevState.time + TIMER_INTERVAL}));
      }
    }

    render() {
      if (this.state.time > options.timeout) {
        return (<FallbackComponent {...this.props}> {this.props.children} </FallbackComponent>);
      }

      return (
        <Component
          {...this.props}
        />
      );
    }
  }

  return TimeoutComponent;
}

export default withTimeoutComponent;
