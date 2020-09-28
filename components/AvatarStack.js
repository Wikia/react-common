'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));
var AvatarBadgeAdmin = _interopDefault(require('@wikia/react-common/assets/AvatarBadgeAdmin'));
var AvatarBadgeContentModerator = _interopDefault(require('@wikia/react-common/assets/AvatarBadgeContentModerator'));
var AvatarBadgeDiscussionModerator = _interopDefault(require('@wikia/react-common/assets/AvatarBadgeDiscussionModerator'));
var AvatarBadgeGlobalDiscussionsModerator = _interopDefault(require('@wikia/react-common/assets/AvatarBadgeGlobalDiscussionsModerator'));
var AvatarBadgeHelper = _interopDefault(require('@wikia/react-common/assets/AvatarBadgeHelper'));
var AvatarBadgeStaff = _interopDefault(require('@wikia/react-common/assets/AvatarBadgeStaff'));
var AvatarBadgeVstf = _interopDefault(require('@wikia/react-common/assets/AvatarBadgeVstf'));
var IconAvatar = _interopDefault(require('@wikia/react-common/icons/IconAvatar'));

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

var Badge = function Badge(_ref) {
  var badge = _ref.badge,
      className = _ref.className;
  var badgeIcons = {
    sysop: {
      icon: React.createElement(AvatarBadgeAdmin, null),
      title: 'Community Admin'
    },
    'content-moderator': {
      icon: React.createElement(AvatarBadgeContentModerator, null),
      title: 'Content Moderator'
    },
    threadmoderator: {
      icon: React.createElement(AvatarBadgeDiscussionModerator, null),
      title: 'Discussions Moderator'
    },
    'global-discussions-moderator': {
      icon: React.createElement(AvatarBadgeGlobalDiscussionsModerator, null),
      title: 'Global Discussions Moderator'
    },
    helper: {
      icon: React.createElement(AvatarBadgeHelper, null),
      title: 'FANDOM Helper'
    },
    staff: {
      icon: React.createElement(AvatarBadgeStaff, null),
      title: 'FANDOM Staff'
    },
    vstf: {
      icon: React.createElement(AvatarBadgeVstf, null),
      title: 'VSTF'
    }
  };
  var badgeIcon = badgeIcons[badge];
  return badgeIcon ? React.createElement("span", {
    title: badgeIcon.title,
    className: "wds-avatar__badge ".concat(className)
  }, badgeIcon.icon) : null;
};

Badge.propTypes = {
  badge: PropTypes.string,
  className: PropTypes.string
};
Badge.defaultProps = {
  badge: undefined,
  className: ''
};

var AvatarImage = function AvatarImage(_ref) {
  var src = _ref.src,
      alt = _ref.alt;
  var className = 'wds-avatar__image';
  return src ? React.createElement("img", {
    src: src,
    alt: alt,
    title: alt,
    className: className
  }) : React.createElement(IconAvatar, {
    className: "wds-avatar__image",
    title: className
  });
};

AvatarImage.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string
};
AvatarImage.defaultProps = {
  alt: undefined,
  src: undefined
};

function getAvatarImage(href, alt, src, linkBuilder) {
  var avatarImage = React.createElement(AvatarImage, {
    alt: alt,
    src: src
  });

  if (linkBuilder) {
    return linkBuilder(avatarImage);
  }

  return href ? React.createElement("a", {
    href: href
  }, avatarImage) : avatarImage;
}

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var Avatar = /*#__PURE__*/function (_React$Component) {
  _inherits(Avatar, _React$Component);

  var _super = _createSuper(Avatar);

  function Avatar() {
    var _this;

    _classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      imageSrc: _this.props.src
    });

    return _this;
  }

  _createClass(Avatar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.state.imageSrc && this.props.userId) {
        // eslint-disable-next-line
        fetch("https://services.wikia.com/user-attribute/user/".concat(this.props.userId, "/attr/avatar")).then(function (response) {
          return response.json();
        }).then(function (data) {
          return _this2.setState({
            imageSrc: data.value
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          alt = _this$props.alt,
          badge = _this$props.badge,
          className = _this$props.className,
          href = _this$props.href,
          title = _this$props.title,
          linkBuilder = _this$props.linkBuilder;
      return React.createElement("div", {
        className: classNames('wds-avatar', className),
        title: title
      }, getAvatarImage(href, alt, this.state.imageSrc, linkBuilder), badge && React.createElement(Badge, {
        badge: badge
      }));
    }
  }]);

  return Avatar;
}(React.Component);

Avatar.propTypes = {
  /** Alt text for avatar */
  alt: PropTypes.string,

  /** Badge to display for avatar. */
  badge: PropTypes.oneOf(['content-moderator', 'discussion-moderator', 'sysop', 'global-discussions-moderator', 'helper', 'staff', 'vstf', '']),

  /** Additional class name */
  className: PropTypes.string,

  /** Link to user's profile */
  href: PropTypes.string,

  /** Function which returns wrapped AvatarImage, accepts one argument avatarImage which provides the actual avatar image */
  linkBuilder: PropTypes.func,

  /** Image src for avatar */
  src: PropTypes.string,

  /** Title attribute for avatar */
  title: PropTypes.string,

  /** Optional user ID to fetch avatar for, if `src` prop is not provided */
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Avatar.defaultProps = {
  alt: 'User avatar',
  badge: undefined,
  className: undefined,
  href: undefined,
  linkBuilder: undefined,
  src: undefined,
  title: undefined,
  userId: undefined
};

/* eslint-disable react/no-array-index-key */

var AvatarStack = function AvatarStack(_ref) {
  var avatars = _ref.avatars,
      overrideCount = _ref.overrideCount,
      maxStackSize = _ref.maxStackSize,
      hideOverflow = _ref.hideOverflow,
      className = _ref.className;
  var count = overrideCount || avatars.length;
  var overflow = !hideOverflow && (count > maxStackSize ? count - maxStackSize : 0);
  return React.createElement("div", {
    className: classNames('wds-avatar-stack', className)
  }, avatars.slice(0, maxStackSize).map(function (avatarProps, index) {
    return React.createElement(Avatar, _extends({
      key: index
    }, avatarProps));
  }), overflow && React.createElement("div", {
    className: "wds-avatar-stack__overflow"
  }, "+".concat(overflow)));
};

AvatarStack.propTypes = {
  /* An array of `Avatar` props */
  avatars: PropTypes.arrayOf(PropTypes.shape()).isRequired,

  /* Additional class name */
  className: PropTypes.string,

  /* Flag to hide overflow */
  hideOverflow: PropTypes.bool,

  /* Max stack size */
  maxStackSize: PropTypes.number,

  /* If specified, it will be used instead of `avatars.length` */
  overrideCount: PropTypes.number
};
AvatarStack.defaultProps = {
  className: '',
  hideOverflow: false,
  maxStackSize: 5,
  overrideCount: 0
};

module.exports = AvatarStack;
