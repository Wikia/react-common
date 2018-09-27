'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/**
 * A single WDS icon.
 *
 * **NOTE**: This icon is using `IconSprite` component.
 */

var Icon = function Icon(_ref) {
  var name = _ref.name,
      className = _ref.className,
      small = _ref.small,
      tiny = _ref.tiny,
      props = _objectWithoutProperties(_ref, ["name", "className", "small", "tiny"]);

  var isSmall = small || /-small$/.test(name);
  var isTiny = tiny || /-tiny$/.test(name);
  var classes = ['wds-icon', className, isSmall ? 'wds-icon-small' : '', isTiny ? 'wds-icon-tiny' : ''].filter(function (c) {
    return c;
  }).join(' ');
  return React.createElement("svg", _extends({
    className: classes
  }, props), React.createElement("use", {
    xlinkHref: "#wds-icons-".concat(name)
  }));
};

Icon.propTypes = {
  /**
  * Icon name - both `-small` and `-tiny` prefix are also updating class name
  */
  className: PropTypes.string,

  /**
  * Additional class name
  */
  name: PropTypes.string.isRequired,

  /**
  * `wds-icon-small` flag for the class name (but not for the icon name)
  */
  small: PropTypes.bool,

  /**
  * `wds-icon-tiny` flag for the class name (but not for the icon name)
  */
  tiny: PropTypes.bool
};
Icon.defaultProps = {
  className: '',
  small: false,
  tiny: false
};

function getIconName(type) {
  switch (type) {
    case 'alert':
      return 'error-small';

    case 'warning':
      return 'alert-small';

    case 'success':
      return 'checkmark-circle-small';

    default:
      return 'flag-small';
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
      onClose = _ref.onClose;
  return React.createElement("div", {
    className: "wds-banner-notification ".concat(getClassName(type), " ").concat(className)
  }, React.createElement("div", {
    className: "wds-banner-notification__icon"
  }, React.createElement(Icon, {
    name: getIconName(type)
  })), React.createElement("span", {
    className: "wds-banner-notification__text"
  }, text), onClose && React.createElement(Icon, {
    name: "cross-tiny",
    className: "wds-banner-notification__close",
    onClick: onClose
  }));
};

BannerNotification.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired
};
BannerNotification.defaultProps = {
  className: '',
  onClose: null
};

var messageType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  permanent: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired
});

/**
 * Component used to create notifications. For full functionality it needs some
 * app logic to handle the array of messages - adding/removing.
 *
 * See the following:
 * - https://github.com/Wikia/f2/blob/master/frontend/react-app/curationTools/containers/Notifications.jsx
 * - https://github.com/Wikia/f2/tree/master/frontend/react-app/curationTools/reducers/notifications
 *
 * The `messages` prop is an array of `bannerNotificationsMessageType` objects with the following props:
 * - `id`: unique string that's send as the param of the `onClose` function
 * - `type`: one of: `'alert'`, `'warning'`, `'success'` or `'message'`.
 * - `text`: text that is going to be displayed on the notification
 * - `permanent`: a boolean flag - if present the close button won't be displayed on the notification
 *
 * `bannerNotificationsMessageType` is exported along with `BannerNotification`
 */

var BannerNotifications =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BannerNotifications, _React$Component);

  function BannerNotifications(props) {
    var _this;

    _classCallCheck(this, BannerNotifications);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BannerNotifications).call(this, props));
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(BannerNotifications, [{
    key: "onClose",
    value: function onClose(id) {
      var onClose = this.props.onClose;
      onClose(id);
    }
  }, {
    key: "renderNotification",
    value: function renderNotification(_ref) {
      var _this2 = this;

      var text = _ref.text,
          type = _ref.type,
          id = _ref.id,
          permanent = _ref.permanent;
      var props = {
        key: id,
        type: type,
        text: text
      };

      if (permanent) {
        return React.createElement(BannerNotification, props);
      }

      return React.createElement(BannerNotification, _extends({}, props, {
        onClose: function onClose() {
          return _this2.onClose(id);
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          className = _this$props.className,
          messages = _this$props.messages;

      if (messages.length === 0) {
        return null;
      }

      return React.createElement("div", {
        className: "wds-banner-notification__container ".concat(className)
      }, messages.map(function (message) {
        return _this3.renderNotification(message);
      }));
    }
  }]);

  return BannerNotifications;
}(React.Component);

BannerNotifications.propTypes = {
  /**
  * An additional class name
  */
  className: PropTypes.string,

  /**
  * An array of `bannerNotificationsMessageType` objects
  * @type {bannerNotificationsMessageType}
  */
  messages: PropTypes.arrayOf(messageType).isRequired,

  /**
  * Action invoked when close button is clicked
  * @type {[type]}
  */
  onClose: PropTypes.func.isRequired
};
BannerNotifications.defaultProps = {
  className: ''
};

module.exports = BannerNotifications;
