import React from 'react';
import PropTypes from 'prop-types';

import LogoFandomHeart from '../../../../assets/LogoFandomHeart';

const CommunityBar = ({ model, siteName }) => {
    const { href, title, tracking_label: trackingLabel, mobile_title: mobileTitle } = siteName;

    return (
        <div className="wds-global-navigation__community-bar">
            <a
                href={model.href}
                className="wds-global-navigation__logo-heart-link"
                data-tracking-label={model['tracking-label']}
            >
                <LogoFandomHeart className="wds-global-navigation__logo-heart" />
            </a>
            <div className="wds-global-navigation__community-bar-separator" />
            <div className="wds-community-bar__sitename">
                <a
                    href={href}
                    data-tracking-label={trackingLabel}
                >
                    {
                        mobileTitle ? mobileTitle.value : title.value
                    }
                </a>
            </div>
        </div>
    );
};

CommunityBar.propTypes = {
    model: PropTypes.shape().isRequired,
    siteName: PropTypes.shape().isRequired,
};

export default CommunityBar;
