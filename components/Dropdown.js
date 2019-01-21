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

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

/**
 * Basic DropdownContent component
 */

var DropdownContent = function DropdownContent(_ref) {
  var children = _ref.children,
      dropdownLeftAligned = _ref.dropdownLeftAligned,
      dropdownRightAligned = _ref.dropdownRightAligned,
      scrollable = _ref.scrollable,
      isLevel2 = _ref.isLevel2,
      elementRef = _ref.elementRef;
  var className = classnames({
    'wds-dropdown__content': true,
    'wds-is-left-aligned': dropdownLeftAligned,
    'wds-is-right-aligned': dropdownRightAligned,
    'wds-is-not-scrollable': !scrollable,
    'wds-dropdown-level-2__content': isLevel2
  });
  return React.createElement("div", {
    className: className,
    ref: elementRef
  }, children);
};

DropdownContent.propTypes = {
  /**
   * React Component to display as content
   */
  children: PropTypes.node,

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
  elementRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  }).isRequired,

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
  dropdownLeftAligned: false,
  dropdownRightAligned: false,
  scrollable: true,
  isLevel2: false
};

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
      rest = _objectWithoutProperties(_ref, ["name", "className", "small", "tiny"]);

  var isSmall = small || /-small$/.test(name);
  var isTiny = tiny || /-tiny$/.test(name);
  var classes = ['wds-icon', className, isSmall ? 'wds-icon-small' : '', isTiny ? 'wds-icon-tiny' : ''].filter(function (c) {
    return c;
  }).join(' ');
  return React.createElement("svg", _extends({
    className: classes
  }, rest), React.createElement("use", {
    xlinkHref: "#wds-icons-".concat(name)
  }));
};

Icon.propTypes = {
  /** Additional class name */
  className: PropTypes.string,

  /** name - both `-small` and `-tiny` prefix are also updating class name */
  name: PropTypes.string.isRequired,

  /** `wds-icon-small` flag for the class name (but not for the icon name) */
  small: PropTypes.bool,

  /** `wds-icon-tiny` flag for the class name (but not for the icon name) */
  tiny: PropTypes.bool
};
Icon.defaultProps = {
  className: '',
  small: false,
  tiny: false
};

/**
 * Basic DropdownToggle component
 */

var DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownToggle, _React$Component);

  function DropdownToggle() {
    _classCallCheck(this, DropdownToggle);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownToggle).apply(this, arguments));
  }

  _createClass(DropdownToggle, [{
    key: "getToggleContentComponent",
    value: function getToggleContentComponent() {
      var _this$props = this.props,
          toggleContent = _this$props.toggleContent,
          isLevel2 = _this$props.isLevel2;
      var iconClassName = isLevel2 ? 'wds-dropdown-chevron' : 'wds-dropdown__toggle-chevron';
      var icon = React.createElement(Icon, {
        name: "menu-control-tiny",
        className: "wds-icon wds-icon-tiny ".concat(iconClassName)
      });
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
      var fullClassName = classnames([{
        'wds-dropdown__toggle': !isLevel2,
        'wds-dropdown-level-2__toggle': isLevel2
      }, className]);
      var toggleContentComponent = this.getToggleContentComponent();
      var Component = attrs.href ? 'a' : 'div';
      return (// TODO: Fix a11y
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        React.createElement(Component, _extends({
          onClick: onClick,
          className: fullClassName
        }, attrs, {
          role: "button"
        }), toggleContentComponent)
      );
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

function getViewportSize() {
  return {
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  };
}

/**
 * Basic Dropdown component
 */

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this.state = {
      isClicked: false,
      ifFlipped: false,
      isTouchDevice: false
    };
    _this.contentElementRef = React.createRef();
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onToggleClicked = _this.onToggleClicked.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onMouseLeave = _this.onMouseLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onMouseEnter = _this.onMouseEnter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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
    value: function onMouseEnter() {
      var _this$props = this.props,
          canFlip = _this$props.canFlip,
          isLevel2 = _this$props.isLevel2;
      var contentElement = this.contentElementRef.current;

      if (canFlip && !isLevel2 && contentElement) {
        var contentElementBoundingRect = contentElement.getBoundingClientRect();
        var isFlipped = contentElementBoundingRect.bottom > getViewportSize().height;
        this.setState({
          isFlipped: isFlipped
        });
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
          toggleClassName = _this$props2.toggleClassName;
      var _this$state2 = this.state,
          isClicked = _this$state2.isClicked,
          isFlipped = _this$state2.isFlipped,
          isTouchDevice = _this$state2.isTouchDevice;
      var className = classnames({
        'wds-dropdown': !isLevel2,
        'wds-is-active': isClicked || isActive,
        'wds-has-shadow': hasShadow,
        'wds-no-chevron': noChevron,
        'wds-has-dark-shadow': hasDarkShadow,
        'wds-dropdown-level-2': isLevel2,
        'wds-is-touch-device': isTouchDevice,
        'wds-is-sticked-to-parent': isStickedToParent,
        'wds-is-flipped': isFlipped
      });
      var dropdownBody = React.createElement(React.Fragment, null, React.createElement(DropdownToggle, {
        isLevel2: isLevel2,
        attrs: toggleAttrs,
        className: toggleClassName,
        isTouchDevice: isTouchDevice,
        toggleContent: toggle,
        onClick: this.onToggleClicked
      }), React.createElement(DropdownContent, {
        dropdownLeftAligned: dropdownLeftAligned,
        dropdownRightAligned: dropdownRightAligned,
        elementRef: this.contentElementRef,
        isLevel2: isLevel2,
        scrollable: contentScrollable
      }, children));
      var Component = isLevel2 ? 'li' : 'div';
      return (// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        React.createElement(Component, {
          className: className,
          onClick: this.onClick,
          onMouseLeave: this.onMouseLeave,
          onMouseEnter: this.onMouseEnter
        }, dropdownBody)
      );
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
   * is active
   */
  isActive: PropTypes.bool,

  /**
   * Is it a nested dropdown
   */
  isLevel2: PropTypes.bool,

  /**
   * if the top of nested dropdown content should be positioned at the same height as toggle
   */
  isStickedToParent: PropTypes.bool,

  /**
   * Should chevron on the top of dropdown content be hidden
   */
  noChevron: PropTypes.bool,

  /**
   * HTML classes to add to toggle
   */
  onClose: PropTypes.func,

  /**
   * React Component to display as a dropdown toggle
   */
  toggle: PropTypes.node.isRequired,

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
  hasShadow: false,
  noChevron: false,
  hasDarkShadow: false,
  dropdownLeftAligned: false,
  dropdownRightAligned: false,
  contentScrollable: false,
  isLevel2: false,
  isActive: false,
  toggleClassName: '',
  toggleAttrs: {},
  isStickedToParent: false,
  onClose: null
};

module.exports = Dropdown;
