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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconCrossTiny = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M6 4.554L2.746 1.3C2.346.9 1.7.9 1.3 1.3c-.4.4-.4 1.046 0 1.446L4.554 6 1.3 9.254c-.4.4-.4 1.047 0 1.446.4.4 1.046.4 1.446 0L6 7.446 9.254 10.7c.4.4 1.047.4 1.446 0 .4-.4.4-1.046 0-1.446L7.446 6 10.7 2.746c.4-.4.4-1.047 0-1.446-.4-.4-1.046-.4-1.446 0L6 4.554z", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconErrorSmall = ((_ref) => {
  let props = _objectWithoutProperties$2(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$2({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement("path", { fillRule: "evenodd", d: "M10.414 9l1.417-1.416a1.003 1.003 0 0 0-.002-1.412.996.996 0 0 0-1.412-.003L9 7.585 7.584 6.17a1.003 1.003 0 0 0-1.412.002.996.996 0 0 0-.003 1.412L7.585 9 6.17 10.416a1.003 1.003 0 0 0 .002 1.412.996.996 0 0 0 1.412.003L9 10.415l1.416 1.417a1.003 1.003 0 0 0 1.412-.002.996.996 0 0 0 .003-1.412L10.415 9zm1.9-8L17 5.686v6.628L12.314 17H5.686L1 12.314V5.686L5.686 1h6.628z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$3(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconAlertSmall = ((_ref) => {
  let props = _objectWithoutProperties$3(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$3({ viewBox: "0 0 18 16", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M17.928 15.156c.1.178.096.392-.013.565a.603.603 0 0 1-.515.28H.6a.607.607 0 0 1-.515-.28.544.544 0 0 1-.013-.564L8.472.278c.21-.37.847-.37 1.056 0l8.4 14.878zM8 5.99v4.02A1 1 0 0 0 9 11c.556 0 1-.444 1-.99V5.99A1 1 0 0 0 9 5c-.556 0-1 .444-1 .99zM8 13c0 .556.448 1 1 1 .556 0 1-.448 1-1 0-.556-.448-1-1-1-.556 0-1 .448-1 1z", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$4(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconCheckmarkCircleSmall = ((_ref) => {
  let props = _objectWithoutProperties$4(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$4({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement("path", { fillRule: "evenodd", d: "M9 17A8 8 0 1 1 9 1a8 8 0 0 1 0 16zm-1.083-5a.73.73 0 0 0 .52-.22l4.33-4.403c.3-.305.312-.81.024-1.13a.722.722 0 0 0-1.062-.026l-3.83 3.895L6.25 8.563a.72.72 0 0 0-1.06.068.835.835 0 0 0 .063 1.13l2.165 2.04a.725.725 0 0 0 .5.2z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$5(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconFlagSmall = ((_ref) => {
  let props = _objectWithoutProperties$5(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$5({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement("path", { d: "M8.1 16.5l-7-13C.9 3 1 2.4 1.5 2.1c.5-.2 1.1-.1 1.4.4l7 13c.2.5.1 1.1-.4 1.4-.5.2-1.1.1-1.4-.4zM17 6.7c-2.8 2.5-6.2-.6-8.3 3.1L5.5 4.1C7.6.4 11 3.5 13.7 1L17 6.7z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

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
      return React.createElement(IconCheckmarkCircleSmall, {
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
      children = _ref.children;
  return React.createElement("div", {
    className: "wds-banner-notification ".concat(getClassName(type), " ").concat(className)
  }, React.createElement("div", {
    className: "wds-banner-notification__icon"
  }, getIcon(type)), React.createElement("span", {
    className: "wds-banner-notification__text"
  }, children || text), React.createElement(IconCrossTiny, {
    className: "wds-banner-notification__close",
    onClick: onClose
  }));
};

BannerNotification.propTypes = {
  /** Children to display */
  children: PropTypes.node,

  /** An additional class name */
  className: PropTypes.string,
  onClose: PropTypes.func,

  /** Text to display if there are no children. */
  text: PropTypes.string,
  type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired
};
BannerNotification.defaultProps = {
  children: null,
  className: '',
  onClose: null,
  text: ''
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

  function BannerNotifications() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BannerNotifications);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BannerNotifications)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose", function (id) {
      var onClose = _this.props.onClose;
      onClose(id);
    });

    return _this;
  }

  _createClass(BannerNotifications, [{
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

_defineProperty(BannerNotifications, "propTypes", {
  /** An additional class name */
  className: PropTypes.string,

  /** An array of `bannerNotificationsMessageType` objects */
  messages: PropTypes.arrayOf(messageType).isRequired,

  /** Action invoked when close button is clicked */
  onClose: PropTypes.func.isRequired
});

_defineProperty(BannerNotifications, "defaultProps", {
  className: ''
});

module.exports = BannerNotifications;
