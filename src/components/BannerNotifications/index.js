import React from 'react';
import PropTypes from 'prop-types';

import Notification from './Notification';

const BannerNotifications = ({messages, onClose}) => {
  if (messages.length === 0) {
    return null;
  }

  return (
    <div className="wds-banner-notification__container">
      {messages.map(({message, type, id}) => (
        <Notification
          key={id}
          message={message}
          type={type}
          onClose={() => { onClose(id); }}
        />
      ))}
    </div>
  );
};

BannerNotifications.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BannerNotifications;
