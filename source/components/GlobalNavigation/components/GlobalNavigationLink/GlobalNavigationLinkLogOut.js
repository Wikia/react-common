import React from 'react';
import { withTranslation } from 'react-i18next';
import withUpdatedAuthLinks from "../../hocs/withUpdatedAuthLinks";

class GlobalNavigationLinkLogOut extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // TODO: handle SSR case better
    //     this.state = {
    //         redirectUrl: 'https://fandom.com',
    //     }
    // }
    //
    // componentDidMount() {
    //     this.setState({
    //         redirectUrl: window.location.href,
    //     })
    // }

    render() {
        const { link, t, redirectUrl } = this.props;

        return (
            <div id={link.title.key}>
                <form method="POST" action={link.href}>
                    <input
                        type="hidden"
                        name={link['param-name']}
                        value={redirectUrl}
                    />
                    {/* wds-sign-out__button will make this look like a link */}
                    <button
                        type="submit"
                        className="wds-sign-out__button"
                        data-tracking-label={link['tracking-label']}
                    >
                        {t(link.title.key)}
                    </button>
                </form>
            </div>
        );
    }
}

export default withTranslation()(withUpdatedAuthLinks(GlobalNavigationLinkLogOut));
