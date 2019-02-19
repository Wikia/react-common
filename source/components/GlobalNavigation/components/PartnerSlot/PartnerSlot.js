import React from 'react';
import PropTypes from 'prop-types';

const PartnerSlot = ({ model }) => {
    const { href, 'tracking-label': trackingLabel, 'image-data': imageData, title } = model;

    return (
        <div className="wds-global-navigation__partner-slot">
            <div className="wds-global-navigation__partner-slot-horizontal-bar" />
            <a
                href={href}
                className="wds-global-navigation__partner-slot-link"
                data-tracking-label={trackingLabel}
            >
                <img
                    className="wds-global-navigation__partner-slot-image"
                    width="55"
                    height="20"
                    src={imageData.url}
                    alt={title.value}
                />
            </a>
        </div>
    );
};

PartnerSlot.propTypes = {
    model: PropTypes.object.isRequired,
};

export default PartnerSlot;
