import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import withRedirectUrl from '../../hocs/withRedirectUrl';

const GlobalNavigationLinkLogOut = ({ link, t, redirectUrl, className }) => (
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

GlobalNavigationLinkLogOut.propTypes = {
    className: PropTypes.string,
    link: PropTypes.object.isRequired,
    redirectUrl: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
};

GlobalNavigationLinkLogOut.defaultProps = {
    className: '',
};

export default withTranslation()(withRedirectUrl(GlobalNavigationLinkLogOut));
