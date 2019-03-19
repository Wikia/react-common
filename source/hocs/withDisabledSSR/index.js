import React from 'react';

function withDisabledSSR(WrappedComponent) {
    class DisabledSSRComponent extends React.Component {
        state = {
            shouldRender: false,
        };

        componentDidMount() {
            this.setState({ shouldRender: true });
        }

        render() {
            if (!this.state.shouldRender) {
                return null;
            }

            return <WrappedComponent {...this.props} />;
        }
    }

    return DisabledSSRComponent;
}

export default withDisabledSSR;
