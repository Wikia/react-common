import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-restricted-imports
import Icon from '../Icon';

import './styles.scss';

function getIconName(type) {
    switch (type) {
        case ('alert'):
            return 'error-small';
        case ('warning'):
            return 'alert-small';
        case ('success'):
            return 'checkmark-circle-small';
        default:
            return 'flag-small';
    }
}

function getClassName(type) {
    switch (type) {
        case ('alert'):
            return 'wds-alert';
        case ('warning'):
            return 'wds-warning';
        case ('success'):
            return 'wds-success';
        default:
            return 'wds-message';
    }
}

/**
 * This is a single component used in `BannerNotifications` component.
 */
const BannerNotification = ({
    allowHtml, children, className, onClose, text, type,
}) => (
    <div className={`wds-banner-notification ${getClassName(type)} ${className}`}>
        <div className="wds-banner-notification__icon">
            <Icon name={getIconName(type)} />
        </div>
        <span className="wds-banner-notification__text">{allowHtml ? children : text}</span>
        {onClose && <Icon name="cross-tiny" className="wds-banner-notification__close" onClick={onClose} />}
    </div>
);

BannerNotification.propTypes = {
    allowHtml: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    onClose: PropTypes.func,
    text: PropTypes.string,
    type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired,
};

BannerNotification.defaultProps = {
    allowHtml: false,
    children: '',
    className: '',
    onClose: null,
    text: '',
};

export default BannerNotification;
