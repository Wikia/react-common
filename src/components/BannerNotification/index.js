import React from 'react';
import PropTypes from 'prop-types';

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
const BannerNotification = ({className, type, text, onClose}) => (
  <div className={`wds-banner-notification ${getClassName(type)} ${className}`}>
    <div className="wds-banner-notification__icon">
      <Icon name={getIconName(type)} />
    </div>
    <span className="wds-banner-notification__text">{text}</span>
    {onClose && <Icon name="cross-tiny" className="wds-banner-notification__close" onClick={onClose} />}
  </div>
);

BannerNotification.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired,
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

BannerNotification.defaultProps = {
  className: '',
  onClose: null,
};

export default BannerNotification;
