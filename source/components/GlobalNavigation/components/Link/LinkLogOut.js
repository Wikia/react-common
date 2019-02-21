import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import withRedirectUrl from '../../hocs/withRedirectUrl';

const LinkLogOut = ({ link, redirectUrl, className }) => {
    const [t] = useTranslation();

    return (
        <div id={link.title.key} className={className}>
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
};

LinkLogOut.propTypes = {
    className: PropTypes.string,
    link: PropTypes.object.isRequired,
    redirectUrl: PropTypes.string.isRequired,
};

LinkLogOut.defaultProps = {
    className: '',
};

export default withRedirectUrl(LinkLogOut);
