import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function getIcon(type) {
  switch (type) {
    case ('alert'):
      return '#wds-icons-error-small';
    case ('warning'):
      return '#wds-icons-alert-small';
    case ('success'):
      return '#wds-icons-checkmark-circle-small';
    default:
      return '#wds-icons-flag-small';
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
      <svg className="wds-icon wds-icon-small">
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={getIcon(type)} />
      </svg>
    </div>
    <span className="wds-banner-notification__text">{text}</span>
    {onClose && (
      <svg className="wds-icon wds-icon-tiny wds-banner-notification__close" onClick={onClose}>
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#wds-icons-cross-tiny" />
      </svg>
    )}
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
