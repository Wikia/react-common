import React from 'react';
import PropTypes from 'prop-types';

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

const Notification = ({type, message, onClose}) => (
  <div className={`wds-banner-notification ${getClassName(type)}`}>
    <div className="wds-banner-notification__icon">
      <svg className="wds-icon wds-icon-small">
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={getIcon(type)} />
      </svg>
    </div>
    <span className="wds-banner-notification__text">{message}</span>
    <svg className="wds-icon wds-icon-tiny wds-banner-notification__close" onClick={onClose}>
      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#wds-icons-cross-tiny" />
    </svg>
  </div>
);

Notification.propTypes = {
  type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Notification;
