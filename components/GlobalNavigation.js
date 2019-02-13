'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var reactI18next = require('react-i18next');

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var LogoFandomWhite = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ viewBox: "0 0 164 35", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { d: "M32.003 16.524c0 .288-.115.564-.32.768L18.3 30.712c-.226.224-.454.324-.738.324-.292 0-.55-.11-.77-.325l-.943-.886a.41.41 0 0 1-.01-.59l15.45-15.46c.262-.263.716-.078.716.29v2.46zm-17.167 10.12l-.766.685a.642.642 0 0 1-.872-.02L3.01 17.362c-.257-.25-.4-.593-.4-.95v-1.858c0-.67.816-1.007 1.298-.536l10.814 10.56c.188.187.505.57.505 1.033 0 .296-.068.715-.39 1.035zM5.73 7.395L9.236 3.93a.421.421 0 0 1 .592 0l11.736 11.603a3.158 3.158 0 0 1 0 4.5l-3.503 3.462a.423.423 0 0 1-.59 0L5.732 11.89a3.132 3.132 0 0 1-.937-2.25c0-.85.332-1.65.935-2.246zm13.89 1.982l3.662-3.62a3.232 3.232 0 0 1 2.737-.897c.722.098 1.378.47 1.893.978l3.708 3.667a.41.41 0 0 1 0 .585l-5.64 5.576a.419.419 0 0 1-.59 0l-5.77-5.704a.411.411 0 0 1 0-.585zm14.56-.687L26.014.475a.869.869 0 0 0-1.228-.002L18.307 6.94c-.5.5-1.316.5-1.82.004l-6.48-6.4A.87.87 0 0 0 8.793.542L.447 8.67C.16 8.95 0 9.33 0 9.727v7.7c0 .392.158.77.44 1.048l16.263 16.072a.87.87 0 0 0 1.22 0l16.25-16.073c.28-.278.438-.655.438-1.048V9.73c0-.39-.153-.763-.43-1.04z", fill: "#00D6D6" }),
      React.createElement("path", { d: "M62.852 20.51l2.58-6.716a.468.468 0 0 1 .87 0l2.58 6.717h-6.03zm5.856-12.428c-.184-.48-.65-.8-1.17-.8h-3.342c-.52 0-.986.32-1.17.8l-7.083 18.5c-.21.552.2 1.14.796 1.14h2.753c.353 0 .67-.215.796-.542l.738-1.922a.849.849 0 0 1 .795-.542h8.088a.85.85 0 0 1 .796.542l.74 1.922c.125.327.44.543.795.543h2.754a.843.843 0 0 0 .796-1.14l-7.082-18.5zm93.504-.8h-2.715a1.86 1.86 0 0 0-1.677 1.047l-5.393 11.162-5.393-11.163a1.858 1.858 0 0 0-1.677-1.047h-2.715a.889.889 0 0 0-.893.883V26.84c0 .487.4.883.892.883h2.608a.889.889 0 0 0 .893-.883v-9.686l4.945 10.072c.15.304.46.497.803.497h1.073a.893.893 0 0 0 .803-.497l4.945-10.072v9.686c0 .487.4.883.894.883h2.608a.889.889 0 0 0 .893-.883V8.166c0-.487-.4-.883-.893-.883zm-106.972 8.8h-8.63V11.49h10.918a.88.88 0 0 0 .83-.578l.888-2.464a.872.872 0 0 0-.83-1.163h-15.18c-.486 0-.88.39-.88.87v18.7c0 .48.394.87.88.87h2.492c.486 0 .88-.39.88-.87V20.29h7.743a.88.88 0 0 0 .83-.578l.89-2.464a.872.872 0 0 0-.83-1.163zm51.76 7.61h-3.615V11.315H107c3.828 0 6.41 2.517 6.41 6.188 0 3.672-2.582 6.19-6.41 6.19zm-.124-16.41h-7.128c-.486 0-.88.39-.88.872v18.698c0 .48.394.87.88.87h7.128c6.453 0 10.912-4.44 10.912-10.16v-.117c0-5.72-4.46-10.162-10.912-10.162zm-11.947.03h-2.642a.87.87 0 0 0-.876.866v12.36l-8.755-12.72a1.242 1.242 0 0 0-1.023-.535H78.32a.873.873 0 0 0-.876.867v18.706c0 .48.393.867.877.867h2.64a.872.872 0 0 0 .878-.867V14.71l8.608 12.478c.23.334.613.535 1.022.535h3.46a.872.872 0 0 0 .877-.867V8.178a.87.87 0 0 0-.876-.867zm40.71 10.3c0 3.323-2.712 6.016-6.056 6.016-3.345 0-6.056-2.693-6.056-6.015v-.22c0-3.322 2.71-6.015 6.056-6.015 3.344 0 6.055 2.693 6.055 6.015v.22zm-6.056-10.44c-5.694 0-10.31 4.576-10.31 10.22v.22c0 5.646 4.616 10.22 10.31 10.22 5.693 0 10.308-4.574 10.308-10.22v-.22c0-5.644-4.615-10.22-10.308-10.22z", fill: "#FFF" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var LogoFandomWhite$1 = (function (props) {
  return React.createElement(LogoFandomWhite, props);
});

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
  var allClassNames = classnames({
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

  /** Additional class name */
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
        name: "dropdown-tiny",
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
      isFlipped: false,
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
          toggleClassName = _this$props2.toggleClassName,
          className = _this$props2.className;
      var _this$state2 = this.state,
          isClicked = _this$state2.isClicked,
          isFlipped = _this$state2.isFlipped,
          isTouchDevice = _this$state2.isTouchDevice;
      var allClassNames = classnames({
        'wds-dropdown': !isLevel2,
        'wds-is-active': isClicked || isActive,
        'wds-has-shadow': hasShadow,
        'wds-no-chevron': noChevron,
        'wds-has-dark-shadow': hasDarkShadow,
        'wds-dropdown-level-2': isLevel2,
        'wds-is-touch-device': isTouchDevice,
        'wds-is-sticked-to-parent': isStickedToParent,
        'wds-is-flipped': isFlipped
      }, className);
      var dropdownBody = React.createElement(React.Fragment, null, React.createElement(DropdownToggle, {
        isLevel2: isLevel2,
        attrs: toggleAttrs,
        className: toggleClassName,
        isTouchDevice: isTouchDevice,
        toggleContent: toggle,
        onClick: this.onToggleClicked
      }), React.createElement(DropdownContent, {
        className: contentClassName,
        dropdownLeftAligned: dropdownLeftAligned,
        dropdownRightAligned: dropdownRightAligned,
        elementRef: this.contentElementRef,
        isLevel2: isLevel2,
        scrollable: contentScrollable
      }, children));
      var Component = isLevel2 ? 'li' : 'div';
      return (// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        React.createElement(Component, {
          className: allClassNames,
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

  /** Additional class name */
  className: PropTypes.string,

  /**
   * React Component to display as the Dropdown Content
   */
  children: PropTypes.node,

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

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconMagnifyingGlassSmall = ((_ref) => {
  let props = _objectWithoutProperties$2(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$2({ viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M11.563 11.504l-.03.029-.03.031A4.984 4.984 0 0 1 8 13c-2.757 0-5-2.243-5-5s2.243-5 5-5c2.756 0 5 2.243 5 5a4.983 4.983 0 0 1-1.437 3.504m5.144 3.789l-3.103-3.103A6.963 6.963 0 0 0 15 8c0-3.859-3.141-7-7-7-3.86 0-7 3.141-7 7s3.14 7 7 7a6.956 6.956 0 0 0 4.189-1.396l3.103 3.103a1.001 1.001 0 0 0 1.415-1.414", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconMagnifyingGlassSmall$1 = (function (props) {
  return React.createElement(IconMagnifyingGlassSmall, props);
});

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$3(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconMagnifyingGlass = ((_ref) => {
  let props = _objectWithoutProperties$3(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$3({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18m12.207 3.293l-4.823-4.822A9.455 9.455 0 0 0 20 10.5C20 5.262 15.738 1 10.5 1S1 5.262 1 10.5 5.262 20 10.5 20c2.26 0 4.338-.793 5.97-2.115l4.823 4.822a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconMagnifyingGlass$1 = (function (props) {
  return React.createElement(IconMagnifyingGlass, props);
});

var List = function List(_ref) {
  var children = _ref.children,
      isLinked = _ref.isLinked,
      bigItems = _ref.bigItems,
      boldItems = _ref.boldItems,
      linesBetween = _ref.linesBetween,
      hasEllipsis = _ref.hasEllipsis,
      className = _ref.className;
  return React.createElement("ul", {
    className: classnames('wds-list', className, {
      'wds-has-big-items': bigItems,
      'wds-has-bolded-items': boldItems,
      'wds-has-lines-between': linesBetween,
      'wds-is-linked': isLinked,
      'wds-has-ellipsis': hasEllipsis
    })
  }, children);
};

List.propTypes = {
  /** Whether or not the list contains big items */
  bigItems: PropTypes.bool,

  /** Whether or not list items should be bold */
  boldItems: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  hasEllipsis: PropTypes.bool,

  /** Whether or not items are links */
  isLinked: PropTypes.bool,

  /** Whether or not show line separator between items */
  linesBetween: PropTypes.bool
};
List.defaultProps = {
  bigItems: false,
  boldItems: false,
  children: null,
  className: '',
  hasEllipsis: false,
  isLinked: false,
  linesBetween: false
};

var GlobalNavigationSearch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GlobalNavigationSearch, _React$Component);

  function GlobalNavigationSearch() {
    _classCallCheck(this, GlobalNavigationSearch);

    return _possibleConstructorReturn(this, _getPrototypeOf(GlobalNavigationSearch).apply(this, arguments));
  }

  _createClass(GlobalNavigationSearch, [{
    key: "render",
    value: function render() {
      return React.createElement("form", {
        className: "wds-global-navigation__search-container"
      }, React.createElement("div", {
        className: "wds-global-navigation__search"
      }, React.createElement("div", {
        className: "wds-global-navigation__search-toggle",
        role: "searchbox"
      }, React.createElement(IconMagnifyingGlassSmall$1, {
        className: "wds-global-navigation__search-toggle-icon wds-icon wds-icon-small"
      }), React.createElement(IconMagnifyingGlass$1, {
        className: "wds-global-navigation__search-toggle-icon wds-icon"
      }), React.createElement("span", {
        className: "wds-global-navigation__search-toggle-text"
      }, "Search")), React.createElement(Dropdown, {
        className: "wds-global-navigation__search-dropdown",
        toggle: React.createElement("input", {
          className: "wds-global-navigation__search-input",
          placeholder: "Search Wookieepedia..."
        }),
        toggleClassName: "wds-global-navigation__search-input-wrapper",
        contentClassName: "wds-global-navigation__search-suggestions"
      }, React.createElement(List, null, React.createElement("li", null, React.createElement("a", {
        href: "#",
        className: "wds-global-navigation__dropdown-link"
      }, "Suggestion 1")), React.createElement("li", null, React.createElement("a", {
        href: "#",
        className: "wds-global-navigation__dropdown-link"
      }, "Suggestion 2")), React.createElement("li", null, React.createElement("a", {
        href: "#",
        className: "wds-global-navigation__dropdown-link"
      }, "Suggestion 3"))))));
    }
  }]);

  return GlobalNavigationSearch;
}(React.Component);

var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$4(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconAvatar = ((_ref) => {
  let props = _objectWithoutProperties$4(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$4({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-components/GlobalNavigation-a", d: "M12 11c-.965 0-1.75-.785-1.75-1.75S11.035 7.5 12 7.5s1.75.785 1.75 1.75S12.965 11 12 11m0-5.5a3.754 3.754 0 0 0-3.75 3.75A3.754 3.754 0 0 0 12 13a3.754 3.754 0 0 0 3.75-3.75A3.754 3.754 0 0 0 12 5.5m7.679 12.914c-1.987-2.104-4.727-3.289-7.679-3.289-2.953 0-5.692 1.185-7.679 3.289A9.955 9.955 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10a9.956 9.956 0 0 1-2.321 6.414M12 22a9.995 9.995 0 0 1-6.25-2.187c1.613-1.719 3.844-2.688 6.25-2.688s4.637.969 6.249 2.688A9.993 9.993 0 0 1 12 22m0-22C5.383 0 0 5.383 0 12c0 3.268 1.294 6.33 3.651 8.63l.012.013A12 12 0 0 0 12 24h.036a12.008 12.008 0 0 0 8.306-3.363C22.701 18.341 24 15.273 24 12c0-6.617-5.383-12-12-12" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-components/GlobalNavigation-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconAvatar$1 = (function (props) {
  return React.createElement(IconAvatar, props);
});

var AvatarImage = function AvatarImage(_ref) {
  var src = _ref.src,
      alt = _ref.alt;
  var className = 'wds-avatar__image';
  return src ? React.createElement("img", {
    src: src,
    alt: alt,
    title: alt,
    className: className
  }) : React.createElement(IconAvatar$1, {
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

var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$5(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var AvatarBadgeAdmin = ((_ref) => {
  let props = _objectWithoutProperties$5(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$5({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { fill: "#E3BD00", d: "M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9" }),
      React.createElement("path", { fill: "#FFF", d: "M12.567 7.523L10.41 7.21l-.964-1.954c-.17-.341-.728-.341-.897 0L7.585 7.21l-2.157.313a.5.5 0 0 0-.277.853l1.561 1.521-.368 2.148a.5.5 0 0 0 .725.527l1.928-1.014 1.93 1.014a.5.5 0 0 0 .725-.526l-.369-2.148 1.561-1.521a.501.501 0 0 0-.277-.854z" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var AvatarBadgeAdmin$1 = (function (props) {
  return React.createElement(AvatarBadgeAdmin, props);
});

var _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$6(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var AvatarBadgeContentModerator = ((_ref) => {
  let props = _objectWithoutProperties$6(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$6({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { fill: "#999", d: "M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9" }),
      React.createElement("path", { d: "M9.05 6.75l-3.9 3.9c-.1.1-.15.2-.15.35v1.5c0 .3.2.5.5.5H7c.15 0 .25-.05.35-.15l3.9-3.9-2.2-2.2zm3.8-.1l-1.5-1.5c-.2-.2-.5-.2-.7 0l-.9.9 2.2 2.2.9-.9c.2-.2.2-.5 0-.7z", fill: "#FFF" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var AvatarBadgeContentModerator$1 = (function (props) {
  return React.createElement(AvatarBadgeContentModerator, props);
});

var _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$7(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var AvatarBadgeDiscussionModerator = ((_ref) => {
  let props = _objectWithoutProperties$7(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$7({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { fill: "#999", d: "M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9" }),
      React.createElement("path", { fill: "#FFF", d: "M12.821 8.232c0 1.782-1.754 3.232-3.91 3.232a4.71 4.71 0 0 1-.98-.104l-1.832.727a.328.328 0 0 1-.319-.043.323.323 0 0 1-.126-.293l.171-1.533C5.292 9.653 5 8.953 5 8.232 5 6.45 6.754 5 8.91 5c2.157 0 3.911 1.45 3.911 3.232z" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var AvatarBadgeDiscussionModerator$1 = (function (props) {
  return React.createElement(AvatarBadgeDiscussionModerator, props);
});

var _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$8(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var AvatarBadgeGlobalDiscussionsModerator = ((_ref) => {
  let props = _objectWithoutProperties$8(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$8({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { fill: "#00B7E0", d: "M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9" }),
      React.createElement("path", { fill: "#FFF", d: "M12.821 8.232c0 1.782-1.754 3.232-3.91 3.232a4.71 4.71 0 0 1-.98-.104l-1.832.727a.328.328 0 0 1-.319-.043.323.323 0 0 1-.126-.293l.171-1.533C5.292 9.653 5 8.953 5 8.232 5 6.45 6.754 5 8.91 5c2.157 0 3.911 1.45 3.911 3.232z" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var AvatarBadgeGlobalDiscussionsModerator$1 = (function (props) {
  return React.createElement(AvatarBadgeGlobalDiscussionsModerator, props);
});

var _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$9(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var AvatarBadgeHelper = ((_ref) => {
  let props = _objectWithoutProperties$9(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$9({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { fill: "#00B7E0", d: "M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9" }),
      React.createElement(
        "g",
        { fill: "#FFF" },
        React.createElement("path", { d: "M7.667 5h2.667v8H7.667z" }),
        React.createElement("path", { d: "M13 7.667v2.667H5V7.667z" })
      )
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var AvatarBadgeHelper$1 = (function (props) {
  return React.createElement(AvatarBadgeHelper, props);
});

var _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$a(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var AvatarBadgeStaff = ((_ref) => {
  let props = _objectWithoutProperties$a(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$a({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { fill: "#00B7E0", d: "M1.661 5.96c.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9s1.247-2.04 1.661-3.04z" }),
      React.createElement("path", { fill: "#FFF", d: "M11.234 4L9.06 6.055 6.89 4.008 4 6.445V9.14L8.995 14 14 9.14l-.01-2.688L11.235 4zM5.245 6.703l1.608-1.356 3.739 3.526-1.484 1.485-3.863-3.655zm4.542.038l1.466-1.385L12.764 6.7l-1.467 1.468-1.51-1.426zM5 8.717v-.87l3.401 3.22-.487.486L5 8.717zm3.63 3.533l4.366-4.369.002.836-4.003 3.89-.365-.357z" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var AvatarBadgeStaff$1 = (function (props) {
  return React.createElement(AvatarBadgeStaff, props);
});

var _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$b(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var AvatarBadgeVstf = ((_ref) => {
  let props = _objectWithoutProperties$b(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$b({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { fill: "#00B7E0", d: "M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9" }),
      React.createElement("path", { fill: "#FFF", d: "M8.767 12.856a.268.268 0 0 0 .465 0l3.735-6.453A.268.268 0 0 0 12.735 6h-1.616a.268.268 0 0 0-.232.134L9 9.397l-.289-.5-1.596-2.763A.268.268 0 0 0 6.884 6H5.268a.268.268 0 0 0-.232.403l3.73 6.453z" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var AvatarBadgeVstf$1 = (function (props) {
  return React.createElement(AvatarBadgeVstf, props);
});

var Badge = function Badge(_ref) {
  var badge = _ref.badge;
  var badgeIcons = {
    admin: {
      icon: React.createElement(AvatarBadgeAdmin$1, null),
      title: 'Community Admin'
    },
    'content-moderator': {
      icon: React.createElement(AvatarBadgeContentModerator$1, null),
      title: 'Content Moderator'
    },
    'discussion-moderator': {
      icon: React.createElement(AvatarBadgeDiscussionModerator$1, null),
      title: 'Discussions Moderator'
    },
    'global-discussions-moderator': {
      icon: React.createElement(AvatarBadgeGlobalDiscussionsModerator$1, null),
      title: 'Global Discussions Moderator'
    },
    helper: {
      icon: React.createElement(AvatarBadgeHelper$1, null),
      title: 'FANDOM Helper'
    },
    staff: {
      icon: React.createElement(AvatarBadgeStaff$1, null),
      title: 'FANDOM Staff'
    },
    vstf: {
      icon: React.createElement(AvatarBadgeVstf$1, null),
      title: 'VSTF'
    }
  };
  var badgeIcon = badgeIcons[badge];
  return badgeIcon ? React.createElement("span", {
    title: badgeIcon.title,
    className: "wds-avatar__badge"
  }, badgeIcon.icon) : null;
};

Badge.propTypes = {
  badge: PropTypes.string
};
Badge.defaultProps = {
  badge: undefined
};

var getAvatarImage = function getAvatarImage(href, alt, src) {
  var avatarImage = React.createElement(AvatarImage, {
    alt: alt,
    src: src
  });
  return href ? React.createElement("a", {
    href: href
  }, avatarImage) : avatarImage;
};

var Avatar = function Avatar(_ref) {
  var alt = _ref.alt,
      badge = _ref.badge,
      className = _ref.className,
      href = _ref.href,
      src = _ref.src,
      title = _ref.title;
  return React.createElement("div", {
    className: classnames('wds-avatar', className),
    title: title
  }, getAvatarImage(href, alt, src), badge && React.createElement(Badge, {
    badge: badge
  }));
};

Avatar.propTypes = {
  /** Alt text for avatar */
  alt: PropTypes.string,

  /** Badge to display for avatar. */
  badge: PropTypes.oneOf(['admin', 'content-moderator', 'discussion-moderator', 'sysop', 'global-discussions-moderator', 'helper', 'staff', 'vstf', '']),

  /** Additional class name */
  className: PropTypes.string,

  /** Link to user's profile */
  href: PropTypes.string,

  /** Image src for avatar */
  src: PropTypes.string,

  /** Title attribute for avatar */
  title: PropTypes.string
};
Avatar.defaultProps = {
  alt: 'User avatar',
  badge: undefined,
  className: undefined,
  href: undefined,
  src: undefined,
  title: undefined
};

var GlobalNavigationUserAnon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GlobalNavigationUserAnon, _React$Component);

  function GlobalNavigationUserAnon() {
    _classCallCheck(this, GlobalNavigationUserAnon);

    return _possibleConstructorReturn(this, _getPrototypeOf(GlobalNavigationUserAnon).apply(this, arguments));
  }

  _createClass(GlobalNavigationUserAnon, [{
    key: "render",
    value: function render() {
      return React.createElement(Dropdown, {
        toggle: function toggle(chevron) {
          return React.createElement(React.Fragment, null, React.createElement(Avatar, null), chevron);
        },
        className: "wds-global-navigation__user-menu wds-global-navigation__user-anon"
      }, "Content");
    }
  }]);

  return GlobalNavigationUserAnon;
}(React.Component);

var GlobalNavigationLinkText = function GlobalNavigationLinkText(_ref) {
  var link = _ref.link,
      isStandaloneLink = _ref.isStandaloneLink;

  var _useTranslation = reactI18next.useTranslation(),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  return React.createElement("a", {
    href: link.href,
    "data-tracking-label": link['tracking-label'],
    className: classnames({
      'wds-global-navigation__link': isStandaloneLink
    })
  }, t(link.title.key));
};

/**
 * Basic button component
 */

var Button = function Button(_ref) {
  var className = _ref.className,
      href = _ref.href,
      text = _ref.text,
      secondary = _ref.secondary,
      square = _ref.square,
      fullwidth = _ref.fullwidth,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "href", "text", "secondary", "square", "fullwidth", "children"]);

  var classes = ['wds-button', className, secondary ? 'wds-is-secondary' : '', square ? 'wds-is-square' : '', text ? 'wds-is-text' : '', fullwidth ? 'wds-is-fullwidth' : ''].filter(function (c) {
    return c;
  }).join(' ');

  if (href) {
    return React.createElement("a", _extends({
      href: href,
      className: classes
    }, rest), children);
  }

  return React.createElement("button", _extends({
    className: classes
  }, rest), children);
};

Button.propTypes = {
  /** @ignore */
  children: PropTypes.node,

  /** Additional class name */
  className: PropTypes.string,

  /** Disabled attribute for the `<button>` */
  disabled: PropTypes.bool,

  /** Full width flag */
  fullwidth: PropTypes.bool,

  /** href attribute - `<Button/>` uses `<a>` tag if it's present */
  href: PropTypes.string,

  /** Callback for the `<button>` */
  onClick: PropTypes.func,

  /** Secondary flag */
  secondary: PropTypes.bool,

  /** Square flag */
  square: PropTypes.bool,

  /** Text flag */
  text: PropTypes.bool
};
Button.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  fullwidth: false,
  href: null,
  secondary: false,
  square: false,
  text: false,
  onClick: function onClick() {}
};

var GlobalNavigationLinkButton = function GlobalNavigationLinkButton(_ref) {
  var link = _ref.link;

  var _useTranslation = reactI18next.useTranslation(),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  return React.createElement(Button, {
    className: "wds-global-navigation__link-button",
    secondary: true,
    dataTrackingLabel: link['tracking-label'],
    href: link.href
  }, t(link.title.key));
};

var GlobalNavigationLinkGroup = function GlobalNavigationLinkGroup(_ref) {
  var link = _ref.link;

  var _useTranslation = reactI18next.useTranslation(),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  return React.createElement(Dropdown, {
    toggle: t(link.title.key),
    className: "wds-global-navigation__link-group",
    hasShadow: true,
    toggleClassName: "wds-global-navigation__link",
    contentClassName: "wds-global-navigation__dropdown-content"
  }, React.createElement(List, {
    isLinked: true
  }, link.items.map(function (item) {
    var link;

    if (item.type === 'link-text') {
      link = React.createElement(GlobalNavigationLinkText, {
        link: item
      });
    } else {
      link = React.createElement(GlobalNavigationLinkButton, {
        link: item
      });
    }

    return React.createElement("li", null, link);
  })));
};

var GlobalNavigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GlobalNavigation, _React$Component);

  function GlobalNavigation() {
    _classCallCheck(this, GlobalNavigation);

    return _possibleConstructorReturn(this, _getPrototypeOf(GlobalNavigation).apply(this, arguments));
  }

  _createClass(GlobalNavigation, [{
    key: "renderMainNavigation",
    value: function renderMainNavigation(navigation) {
      return navigation.map(function (link) {
        if (link.type === 'link-text') {
          return React.createElement(GlobalNavigationLinkText, {
            link: link,
            isStandaloneLink: true
          });
        } else if (link.type === 'link-group') {
          return React.createElement(GlobalNavigationLinkGroup, {
            link: link
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var model = this.props.model;
      return React.createElement("div", {
        className: "wds-global-navigation"
      }, React.createElement("div", {
        className: "wds-global-navigation__content-bar-left"
      }, React.createElement("a", {
        href: model.logo.href,
        className: "wds-global-navigation__logo",
        "data-tracking-label": model.logo['tracking-label']
      }, React.createElement(LogoFandomWhite$1, {
        height: "27"
      })), React.createElement("nav", {
        className: "wds-global-navigation__links"
      }, this.renderMainNavigation(model['main-navigation']))), React.createElement("div", {
        className: "wds-global-navigation__content-bar-right"
      }, React.createElement("div", {
        className: "wds-global-navigation__dropdown-controls"
      }, React.createElement(GlobalNavigationSearch, null), React.createElement(GlobalNavigationUserAnon, null), React.createElement("div", {
        className: "wds-global-navigation__start-a-wiki"
      }, React.createElement(GlobalNavigationLinkButton, {
        link: model['create-wiki']
      })))));
    }
  }]);

  return GlobalNavigation;
}(React.Component);

module.exports = GlobalNavigation;