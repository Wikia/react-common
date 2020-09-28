'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var styled = _interopDefault(require('styled-components'));
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

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: ", ";\n    left: ", ";\n    line-height: 0;\n    min-width: ", ";\n    position: absolute;\n    top: ", ";\n    width: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Badge$1 = styled(Badge)(_templateObject(), function (props) {
  return "".concat(props.size, "px");
}, function (props) {
  return "".concat(-1 * props.size / (props.diameter > 48 ? 4.5 : 3.5), "px");
}, function (props) {
  return "".concat(props.size, "px");
}, function (props) {
  return "".concat(-1 * props.size / (props.diameter > 48 ? 3.5 : 2.5), "px");
}, function (props) {
  return "".concat(props.size, "px");
});
Badge$1.propTypes = {
  className: PropTypes.string,
  diameter: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired
};
Badge$1.defaultProps = {
  className: ''
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n    background-color: #fff;\n    border-radius: 50%;\n    border: 0;\n    box-sizing: border-box;\n    display: inline-block;\n    fill: ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
// eslint-disable-next-line jsx-a11y/alt-text

var DefaultAvatar = styled(function (_ref) {
  var borderWidth = _ref.borderWidth,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["borderWidth", "size"]);

  return React.createElement(IconAvatar, _extends({
    height: size,
    width: size
  }, rest));
})(_templateObject$1(), function (props) {
  return props.theme.color.fandom_mid_light_gray;
});
DefaultAvatar.defaultProps = {
  alt: PropTypes.string.isRequired,
  borderWidth: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};
DefaultAvatar.defaultProps = {
  className: ''
};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n    height: 100%;\n    width: 100%;\n    border-radius: 50%;\n    box-sizing: border-box;\n    display: inline-block;\n    border: ", " solid #bed1cf;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
// eslint-disable-next-line jsx-a11y/alt-text

var UserAvatar = styled(function (_ref) {
  var borderWidth = _ref.borderWidth,
      rest = _objectWithoutProperties(_ref, ["borderWidth"]);

  return React.createElement("img", rest);
})(_templateObject$2(), function (props) {
  return props.borderWidth;
});
UserAvatar.propTypes = {
  alt: PropTypes.string.isRequired,
  borderWidth: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired
};
UserAvatar.defaultProps = {
  className: ''
};

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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    height: ", ";\n    min-width: ", ";\n    position: relative;\n    width: ", ";\n\n    ", " ", ":hover {\n        fill: ", ";\n    }\n\n    ", " ", ":hover {\n        border-color: ", ";\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n    color: #000;\n    height: 100%;\n    width: 100%;\n\n    &:hover {\n        color: ", ";\n    }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

function getBorderWidth(size) {
  var diameter = parseInt(size, 10);
  var borderWidth = 2;

  if (diameter >= 48) {
    borderWidth = 3;
  }

  if (diameter >= 120) {
    borderWidth = 4;
  }

  return "".concat(borderWidth, "px");
}

function getBadgeSize(size) {
  return 0.2539 * parseInt(size, 10) + 8;
}

var Link = styled.a(_templateObject$3(), function (props) {
  return props.theme.color.fandom_aqua;
});
var Wrapper = styled.div(_templateObject2(), function (props) {
  return "".concat(props.size, "px");
}, function (props) {
  return "".concat(props.size, "px");
}, function (props) {
  return "".concat(props.size, "px");
}, Link, DefaultAvatar, function (props) {
  return props.href ? props.theme.color.fandom_aqua : props.theme.color.fandom_mid_light_gray;
}, Link, UserAvatar, function (props) {
  return props.href ? props.theme.color.fandom_aqua : props.theme.color.fandom_mid_light_gray;
});
/**
 * A `styled-component` version of Avatar component
 */

var StyledAvatar = /*#__PURE__*/function (_React$Component) {
  _inherits(StyledAvatar, _React$Component);

  var _super = _createSuper(StyledAvatar);

  function StyledAvatar() {
    var _this;

    _classCallCheck(this, StyledAvatar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      imageSrc: _this.props.src
    });

    return _this;
  }

  _createClass(StyledAvatar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.state.imageSrc && this.props.userId) {
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
    key: "renderAvatarImage",
    value: function renderAvatarImage() {
      var borderWidth = getBorderWidth(this.props.size);
      var alt = this.props.alt;
      var avatarImage = this.state.imageSrc ? React.createElement(UserAvatar, {
        borderWidth: borderWidth,
        src: this.state.imageSrc,
        alt: alt,
        title: alt
      }) : React.createElement(DefaultAvatar, {
        size: this.props.size.toString(),
        borderWidth: borderWidth,
        alt: alt,
        title: alt
      });

      if (this.props.linkBuilder) {
        return this.props.linkBuilder(avatarImage);
      }

      return this.props.href ? React.createElement(Link, {
        href: this.props.href
      }, avatarImage) : avatarImage;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(Wrapper, {
        className: this.props.className,
        title: this.props.title,
        size: this.props.size,
        href: this.props.href
      }, this.renderAvatarImage(), this.props.badge && React.createElement(Badge$1, {
        badge: this.props.badge,
        diameter: parseInt(this.props.size, 10),
        size: getBadgeSize(this.props.size)
      }));
    }
  }]);

  return StyledAvatar;
}(React.Component);

StyledAvatar.propTypes = {
  /** Alt text for avatar */
  alt: PropTypes.string,

  /** Badge to display for avatar. */
  badge: PropTypes.oneOf(['content-moderator', 'discussion-moderator', 'sysop', 'global-discussions-moderator', 'helper', 'staff', 'vstf', '']),

  /** Additional class name */
  className: PropTypes.string,

  /** Link to user's profile */
  href: PropTypes.string,

  /** Function that returns wrapped avatar image, accepts one argument avatarImage which provides the actual avatar image */
  linkBuilder: PropTypes.func,

  /** Size of avatar in px */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Image src for avatar */
  src: PropTypes.string,

  /** Title attribute for avatar */
  title: PropTypes.string,

  /** Optional user ID to fetch avatar for, if `src` prop is not provided */
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
StyledAvatar.defaultProps = {
  alt: 'User avatar',
  badge: undefined,
  className: undefined,
  href: undefined,
  linkBuilder: undefined,
  size: 48,
  src: undefined,
  title: undefined,
  userId: undefined
};

module.exports = StyledAvatar;
