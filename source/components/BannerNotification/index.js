import React from 'react';
import PropTypes from 'prop-types';

import IconCloseTiny from '../../icons/IconCloseTiny';

import { getClassName, getIcon } from './utils';

import './styles.scss';

/**
 * This is a single component used in `BannerNotifications` component.
 */
const BannerNotification = ({ className, type, text, onClose, children, markup }) => (
    <div className={`wds-banner-notification ${getClassName(type)} ${className}`}>
        <div className="wds-banner-notification__icon">{getIcon(type)}</div>
        {markup
            // eslint-disable-next-line react/no-danger
            ? <span className="wds-banner-notification__text" dangerouslySetInnerHTML={{ __html: markup }} />
            : <span className="wds-banner-notification__text">{children || text}</span>
        }
        <IconCloseTiny className="wds-banner-notification__close" onClick={onClose} />
    </div>
);

BannerNotification.propTypes = {
    /** Children to display */
    children: PropTypes.node,
    /** An additional class name */
    className: PropTypes.string,
    markup: PropTypes.string,
    onClose: PropTypes.func,
    /** Text to display if there are no children. */
    text: PropTypes.string,
    type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired,
};

BannerNotification.defaultProps = {
    children: null,
    className: '',
    markup: '',
    onClose: null,
    text: '',
};

export default BannerNotification;
