import React from 'react';
import { withTranslation } from 'react-i18next';
import withRedirectUrl from "../../hocs/withRedirectUrl";

class GlobalNavigationLinkLogOut extends React.Component {
    render() {
        const { link, t, redirectUrl, className } = this.props;

        return (
            <div id={link.title.key} className={className || ''}>
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

export default withTranslation()(withRedirectUrl(GlobalNavigationLinkLogOut));
