'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var IconCloseTiny = _interopDefault(require('@wikia/react-common/icons/IconCloseTiny'));
var IconAlertSmall = _interopDefault(require('@wikia/react-common/icons/IconAlertSmall'));
var IconCheckmarkSmall = _interopDefault(require('@wikia/react-common/icons/IconCheckmarkSmall'));
var IconErrorSmall = _interopDefault(require('@wikia/react-common/icons/IconErrorSmall'));
var IconFlagSmall = _interopDefault(require('@wikia/react-common/icons/IconFlagSmall'));

function getIcon(type) {
  switch (type) {
    case 'alert':
      return React.createElement(IconErrorSmall, {
        className: "wds-banner-notification__icon-mark"
      });

    case 'warning':
      return React.createElement(IconAlertSmall, {
        className: "wds-banner-notification__icon-mark"
      });

    case 'success':
      return React.createElement(IconCheckmarkSmall, {
        className: "wds-banner-notification__icon-mark"
      });

    default:
      return React.createElement(IconFlagSmall, {
        className: "wds-banner-notification__icon-mark"
      });
  }
}
function getClassName(type) {
  switch (type) {
    case 'alert':
      return 'wds-alert';

    case 'warning':
      return 'wds-warning';

    case 'success':
      return 'wds-success';

    default:
      return 'wds-message';
  }
}

/**
 * This is a single component used in `BannerNotifications` component.
 */

var BannerNotification = function BannerNotification(_ref) {
  var className = _ref.className,
      type = _ref.type,
      text = _ref.text,
      onClose = _ref.onClose,
      children = _ref.children,
      markup = _ref.markup;
  return React.createElement("div", {
    className: "wds-banner-notification ".concat(getClassName(type), " ").concat(className)
  }, React.createElement("div", {
    className: "wds-banner-notification__icon"
  }, getIcon(type)), markup // eslint-disable-next-line react/no-danger
  ? React.createElement("span", {
    className: "wds-banner-notification__text",
    dangerouslySetInnerHTML: {
      __html: markup
    }
  }) : React.createElement("span", {
    className: "wds-banner-notification__text"
  }, children || text), React.createElement(IconCloseTiny, {
    className: "wds-banner-notification__close",
    onClick: onClose
  }));
};

BannerNotification.propTypes = {
  /** Children to display */
  children: PropTypes.node,

  /** An additional class name */
  className: PropTypes.string,
  markup: PropTypes.string,
  onClose: PropTypes.func,

  /** Text to display if there are no children. */
  text: PropTypes.string,
  type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired
};
BannerNotification.defaultProps = {
  children: null,
  className: '',
  markup: '',
  onClose: null,
  text: ''
};

module.exports = BannerNotification;
