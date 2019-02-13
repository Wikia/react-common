import React from 'react';
import { addQueryParams } from '../../../utils/url';

const withUpdatedAuthLinks = (Component) => {
    class ComponentWrapper extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                redirectUrl: 'https://fandom.com',
            };

            this.updateLinks();
        }

        componentDidMount() {
            this.setState({
                redirectUrl: window.location.href,
            });

            this.updateLinks();
        }

        updateLinks() {
            const { data } = this.props;
            const { redirectUrl } = this.state;

            if (!data) {
                return;
            }

            if (data.signin) {
                const params = {};
                params[data.signin['param-name']] = redirectUrl;
                data.signin.href = addQueryParams(data.signin.href, params)
            }

            if (data.register) {
                const params = {};
                params[data.register['param-name']] = redirectUrl;
                data.register.href = addQueryParams(data.register.href, params)
            }
        }

        render() {
            const { redirectUrl } = this.state;

            return <Component {...this.props} redirectUrl={redirectUrl}/>
        }
    }

    return ComponentWrapper;
};

export default withUpdatedAuthLinks;
