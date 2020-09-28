import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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

function getViewportSize() {
  return {
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  };
}

var Element = typeof global.Element === 'undefined' ? null : global.Element;
var refPropType = PropTypes.shape({
  current: PropTypes.instanceOf(Element)
});

/**
 * Basic DropdownContent component
 */

var DropdownContent = function DropdownContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      dropdownLeftAligned = _ref.dropdownLeftAligned,
      dropdownRightAligned = _ref.dropdownRightAligned,
      scrollable = _ref.scrollable,
      isLevel2 = _ref.isLevel2,
      elementRef = _ref.elementRef;
  var allClassNames = classNames({
    'wds-dropdown__content': true,
    'wds-is-left-aligned': dropdownLeftAligned,
    'wds-is-right-aligned': dropdownRightAligned,
    'wds-is-not-scrollable': !scrollable,
    'wds-dropdown-level-2__content': isLevel2
  }, className);
  return React.createElement("div", {
    className: allClassNames,
    ref: elementRef
  }, children);
};

DropdownContent.propTypes = {
  /**
   * React Component to display as content
   */
  children: PropTypes.node,

  /**
   * Additional class name
   */
  className: PropTypes.string,

  /**
   * Should content be left-aligned with the dropdown toggle
   */
  dropdownLeftAligned: PropTypes.bool,

  /**
   * Should content be right-aligned with the dropdown toggle
   */
  dropdownRightAligned: PropTypes.bool,

  /**
   * React ref to the content DOM element
   */
  elementRef: refPropType.isRequired,

  /**
   * Should content be scrollable
   */
  isLevel2: PropTypes.bool,

  /**
   * Is it a nested dropdown
   */
  scrollable: PropTypes.bool
};
DropdownContent.defaultProps = {
  children: null,
  className: '',
  dropdownLeftAligned: false,
  dropdownRightAligned: false,
  scrollable: true,
  isLevel2: false
};

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var IconDropdownTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends$1({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "dropdown-tiny-a",
  d: "M6 8.8a.798.798 0 01-.565-.234l-3.2-3.2A.8.8 0 012.8 4h6.4a.8.8 0 01.566 1.366l-3.2 3.2A.798.798 0 016 8.8z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#dropdown-tiny-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconDropdownTiny$1 = (function (props) {
  return React.createElement(IconDropdownTiny, props);
});

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
var IconMenuControlTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends$2({
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg"
}, props), React.createElement("path", {
  d: "M11.707 3.293a.999.999 0 00-1.414 0L6 7.586 1.707 3.293A.999.999 0 10.293 4.707l5 5a.997.997 0 001.414 0l5-5a.999.999 0 000-1.414",
  fillRule: "evenodd"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconMenuControlTiny$1 = (function (props) {
  return React.createElement(IconMenuControlTiny, props);
});

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var IconMoreSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends$3({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "more-small",
  d: "M9 5c1.103 0 2-.896 2-2s-.897-2-2-2-2 .896-2 2 .897 2 2 2m0 8c-1.103 0-2 .896-2 2s.897 2 2 2 2-.896 2-2-.897-2-2-2m0-6c-1.103 0-2 .896-2 2s.897 2 2 2 2-.896 2-2-.897-2-2-2"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#more-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconMoreSmall$1 = (function (props) {
  return React.createElement(IconMoreSmall, props);
});

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

var getToggleIcon = function getToggleIcon(iconName, isLevel2) {
  var iconClassName = isLevel2 ? 'wds-dropdown-chevron' : 'wds-dropdown__toggle-chevron';

  switch (iconName) {
    case 'more':
      return React.createElement(IconMoreSmall$1, {
        className: "wds-icon wds-icon-small ".concat(iconClassName)
      });

    case 'dropdown-tiny':
      return React.createElement(IconDropdownTiny$1, {
        className: "wds-icon wds-icon-tiny ".concat(iconClassName)
      });

    default:
      return React.createElement(IconMenuControlTiny$1, {
        className: "wds-icon wds-icon-tiny ".concat(iconClassName)
      });
  }
};
/**
 * Basic DropdownToggle component
 */


var DropdownToggle = /*#__PURE__*/function (_React$Component) {
  _inherits(DropdownToggle, _React$Component);

  var _super = _createSuper(DropdownToggle);

  function DropdownToggle() {
    _classCallCheck(this, DropdownToggle);

    return _super.apply(this, arguments);
  }

  _createClass(DropdownToggle, [{
    key: "getToggleContentComponent",
    value: function getToggleContentComponent() {
      var _this$props = this.props,
          toggleContent = _this$props.toggleContent,
          iconName = _this$props.iconName,
          isLevel2 = _this$props.isLevel2;
      var icon = getToggleIcon(iconName, isLevel2);
      var toggleContentComponent;

      if (typeof toggleContent === 'function') {
        toggleContentComponent = toggleContent(icon);
      } else if (typeof toggleContent === 'string') {
        toggleContentComponent = React.createElement(React.Fragment, null, React.createElement("span", null, toggleContent), icon);
      } else {
        toggleContentComponent = toggleContent;
      }

      return toggleContentComponent;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isLevel2 = _this$props2.isLevel2,
          className = _this$props2.className,
          attrs = _this$props2.attrs,
          onClick = _this$props2.onClick;
      var fullClassName = classNames([{
        'wds-dropdown__toggle': !isLevel2,
        'wds-dropdown-level-2__toggle': isLevel2
      }, className]);
      var toggleContentComponent = this.getToggleContentComponent();
      var Component = attrs.href ? 'a' : 'div';
      return React.createElement(Component, _extends({
        onClick: onClick,
        className: fullClassName
      }, attrs, {
        role: "button"
      }), toggleContentComponent);
    }
  }]);

  return DropdownToggle;
}(React.Component);

DropdownToggle.propTypes = {
  /**
   * HTML attributes
   */
  attrs: PropTypes.shape({
    href: PropTypes.string
  }),

  /**
   * Dropdown toggle content
   */
  children: PropTypes.node,

  /**
   * HTML classes
   */
  className: PropTypes.string,

  /**
   *  The icon to use for the dropdown chevron
   */
  iconName: PropTypes.oneOf(['more', 'dropdown-tiny', 'menu-control-tiny']).isRequired,

  /**
   * Is it a nested dropdown
   */
  isLevel2: PropTypes.bool,

  /**
   * Whether or not the dropdown is displayed on touch device
   */
  isTouchDevice: PropTypes.bool,

  /**
   * Callback when toggle is clicked
   */
  onClick: PropTypes.func.isRequired,

  /**
   * Content of the toggle
   */
  toggleContent: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]).isRequired
};
DropdownToggle.defaultProps = {
  children: null,
  isLevel2: false,
  className: '',
  attrs: {},
  isTouchDevice: false
};

function _createSuper$1(Derived) {
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
/**
 * Basic Dropdown component
 */

var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  var _super = _createSuper$1(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);
    _this.state = {
      isClicked: false,
      isFlipped: false,
      isTouchDevice: false
    };
    _this.contentElementRef = React.createRef();
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onToggleClicked = _this.onToggleClicked.bind(_assertThisInitialized(_this));
    _this.onMouseLeave = _this.onMouseLeave.bind(_assertThisInitialized(_this));
    _this.onMouseEnter = _this.onMouseEnter.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isTouchDevice: typeof window !== 'undefined' && 'ontouchstart' in window
      });
    }
  }, {
    key: "onClick",
    value: function onClick() {
      this.handleClick(false);
    }
  }, {
    key: "onToggleClicked",
    value: function onToggleClicked(event) {
      this.handleClick(true, event);
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      var canFlip = this.props.canFlip;
      var isTouchDevice = this.state.isTouchDevice;

      if (isTouchDevice) {
        this.setState({
          isClicked: false
        });
      }

      if (canFlip && !this.isLevel2) {
        this.setState({
          isFlipped: false
        });
      }
    }
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter(event) {
      var _this$props = this.props,
          canFlip = _this$props.canFlip,
          isLevel2 = _this$props.isLevel2,
          onMouseEnter = _this$props.onMouseEnter;
      var contentElement = this.contentElementRef.current;

      if (canFlip && !isLevel2 && contentElement) {
        var contentElementBoundingRect = contentElement.getBoundingClientRect();
        var isFlipped = contentElementBoundingRect.bottom > getViewportSize().height;
        this.setState({
          isFlipped: isFlipped
        });
      }

      if (onMouseEnter) {
        onMouseEnter(event);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(shouldPreventDefault, event) {
      var _this$state = this.state,
          isTouchDevice = _this$state.isTouchDevice,
          isClicked = _this$state.isClicked;
      var onClose = this.props.onClose;

      if (isTouchDevice) {
        this.setState({
          isClicked: !isClicked
        });

        if (shouldPreventDefault) {
          event.preventDefault();
          event.stopPropagation();
        }

        if (isClicked === true && typeof onClose === 'function') {
          onClose();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          toggle = _this$props2.toggle,
          contentClassName = _this$props2.contentClassName,
          dropdownLeftAligned = _this$props2.dropdownLeftAligned,
          dropdownRightAligned = _this$props2.dropdownRightAligned,
          isLevel2 = _this$props2.isLevel2,
          hasShadow = _this$props2.hasShadow,
          noChevron = _this$props2.noChevron,
          hasDarkShadow = _this$props2.hasDarkShadow,
          isActive = _this$props2.isActive,
          contentScrollable = _this$props2.contentScrollable,
          toggleAttrs = _this$props2.toggleAttrs,
          isStickedToParent = _this$props2.isStickedToParent,
          isNotHoverable = _this$props2.isNotHoverable,
          toggleClassName = _this$props2.toggleClassName,
          iconName = _this$props2.iconName,
          className = _this$props2.className;
      var _this$state2 = this.state,
          isClicked = _this$state2.isClicked,
          isFlipped = _this$state2.isFlipped,
          isTouchDevice = _this$state2.isTouchDevice;
      var allClassNames = classNames({
        'wds-dropdown': !isLevel2,
        'wds-is-active': isClicked || isActive,
        'wds-has-shadow': hasShadow,
        'wds-no-chevron': noChevron,
        'wds-has-dark-shadow': hasDarkShadow,
        'wds-dropdown-level-2': isLevel2,
        'wds-is-touch-device': isTouchDevice,
        'wds-is-sticked-to-parent': isStickedToParent,
        'wds-is-not-hoverable': isNotHoverable,
        'wds-is-flipped': isFlipped
      }, className);
      var dropdownBody = React.createElement(React.Fragment, null, React.createElement(DropdownToggle, {
        isLevel2: isLevel2,
        attrs: toggleAttrs,
        className: toggleClassName,
        isTouchDevice: isTouchDevice,
        toggleContent: toggle,
        onClick: this.onToggleClicked,
        iconName: iconName
      }), React.createElement(DropdownContent, {
        className: contentClassName,
        dropdownLeftAligned: dropdownLeftAligned,
        dropdownRightAligned: dropdownRightAligned,
        elementRef: this.contentElementRef,
        isLevel2: isLevel2,
        scrollable: contentScrollable
      }, children));
      var Component = isLevel2 ? 'li' : 'div';
      return React.createElement(Component, {
        className: allClassNames,
        onClick: this.onClick,
        onMouseLeave: this.onMouseLeave,
        onMouseEnter: this.onMouseEnter
      }, dropdownBody);
    }
  }]);

  return Dropdown;
}(React.Component);

Dropdown.propTypes = {
  /**
   * Whether or nor not dropdown should automatically flip when it's near the bottom of the viewport
   */
  canFlip: PropTypes.bool,

  /**
   * React Component to display as the Dropdown Content
   */
  children: PropTypes.node,

  /**
   * Additional class name
   */
  className: PropTypes.string,

  /**
   * HTML classes to add to content element
   */
  contentClassName: PropTypes.string,

  /**
   * Should dropdown content be scrollable
   */
  contentScrollable: PropTypes.bool,

  /**
   * Should dropdown content be left-aligned with the dropdown toggle
   */
  dropdownLeftAligned: PropTypes.bool,

  /**
   * Should dropdown content be right-aligned with the dropdown toggle
   */
  dropdownRightAligned: PropTypes.bool,

  /**
   * Whether or not dropdown should have a drop shadow (darker than the one produced by hasShadow)
   */
  hasDarkShadow: PropTypes.bool,

  /**
   * Whether or not dropdown should have a slight drop shadow
   */
  hasShadow: PropTypes.bool,

  /**
   *  The icon to use for the dropdown chevron
   */
  iconName: PropTypes.oneOf(['more', 'dropdown-tiny', 'menu-control-tiny']),

  /**
   * is active
   */
  isActive: PropTypes.bool,

  /**
   * Is it a nested dropdown
   */
  isLevel2: PropTypes.bool,

  /**
   * If dropdown should not be hoverable
   */
  isNotHoverable: PropTypes.bool,

  /**
   * if the top of nested dropdown content should be positioned at the same height as toggle
   */
  isStickedToParent: PropTypes.bool,

  /**
   * Should chevron on the top of dropdown content be hidden
   */
  noChevron: PropTypes.bool,

  /**
   * Function to call when dropdown will be closed
   */
  onClose: PropTypes.func,

  /**
   * Function to call when dropdown will be hovered
   */
  onMouseEnter: PropTypes.func,

  /**
   * React Component to display as a dropdown toggle
   */
  toggle: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]).isRequired,

  /**
   * HTML attributes to add to toggle
   */
  toggleAttrs: PropTypes.shape({
    href: PropTypes.string
  }),

  /**
   * HTML classes to add to toggle
   */
  toggleClassName: PropTypes.string
};
Dropdown.defaultProps = {
  canFlip: false,
  children: null,
  className: '',
  contentClassName: '',
  contentScrollable: false,
  dropdownLeftAligned: false,
  dropdownRightAligned: false,
  hasDarkShadow: false,
  hasShadow: false,
  iconName: 'menu-control-tiny',
  isLevel2: false,
  isActive: false,
  isNotHoverable: false,
  isStickedToParent: false,
  noChevron: false,
  onClose: null,
  onMouseEnter: null,
  toggleClassName: '',
  toggleAttrs: {}
};

export default Dropdown;
