import React from 'react';

const withRedirectUrl = (Component) => {
    class ComponentWrapper extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                redirectUrl: 'https://fandom.com',
            };

            this.getUrlWithRedirect = this.getUrlWithRedirect.bind(this);
        }

        componentDidMount() {
            this.setState({
                redirectUrl: window.location.href,
            });
        }

        getUrlWithRedirect(href, paramName) {
            const { redirectUrl } = this.state;
            const url = new URL(href);

            url.searchParams.set(paramName, redirectUrl);

            return url.href;
        }

        render() {
            const { redirectUrl } = this.state;

            return <Component {...this.props} redirectUrl={redirectUrl} getUrlWithRedirect={this.getUrlWithRedirect} />;
        }
    }

    return ComponentWrapper;
};

export default withRedirectUrl;
