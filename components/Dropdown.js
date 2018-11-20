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
      isLevel2 = _ref.isLevel2;
  var className = classnames({
    'wds-dropdown__content': true,
    'wds-is-left-aligned': dropdownLeftAligned,
    'wds-is-right-aligned': dropdownRightAligned,
    'wds-is-not-scrollable': !scrollable,
    'wds-dropdown-level-2__content': isLevel2
  });
  return React.createElement("div", {
    className: className
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

/**
 * Basic DropdownToggle component
 */

var DropdownToggle = function DropdownToggle(_ref) {
  var isLevel2 = _ref.isLevel2,
      children = _ref.children,
      classes = _ref.classes,
      attrs = _ref.attrs,
      shouldNotWrap = _ref.shouldNotWrap,
      iconName = _ref.iconName;
  var className = classnames({
    'wds-dropdown__toggle': !isLevel2,
    'wds-dropdown-level-2__toggle': isLevel2
  });

  if (classes) {
    className += " ".concat(classes);
  }

  var iconClassName = isLevel2 ? 'wds-dropdown-chevron' : 'wds-dropdown__toggle-chevron';
  var toggleElement = shouldNotWrap ? children : React.createElement("span", null, children);
  var dropdownToggleBody = React.createElement(React.Fragment, null, toggleElement, React.createElement(Icon, {
    name: iconName,
    className: "wds-icon wds-icon-tiny ".concat(iconClassName)
  }));

  if (isLevel2) {
    return React.createElement("a", _extends({
      className: className
    }, attrs), dropdownToggleBody);
  }

  return React.createElement("div", _extends({
    className: className
  }, attrs), dropdownToggleBody);
};

DropdownToggle.propTypes = {
  /**
   * HTML attributes
   */
  // eslint-disable-next-line react/forbid-prop-types
  attrs: PropTypes.object,

  /**
   * Dropdown toggle content
   */
  children: PropTypes.node,

  /**
   * HTML classes
   */
  classes: PropTypes.string,

  /**
   * Name of the icon displayed next to the toggle
   */
  iconName: PropTypes.string,

  /**
   * Is it a nested dropdown
   */
  isLevel2: PropTypes.bool,

  /**
   * Is it a nested dropdown
   */
  shouldNotWrap: PropTypes.bool
};
DropdownToggle.defaultProps = {
  children: null,
  isLevel2: false,
  classes: '',
  attrs: {},
  shouldNotWrap: false,
  iconName: 'menu-control-tiny'
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
      isTouchDevice: typeof window !== 'undefined' && 'ontouchstart' in window
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onMouseLeave = _this.onMouseLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "onClick",
    value: function onClick(e) {
      var isTouchDevice = this.state.isTouchDevice;

      if (isTouchDevice) {
        this.setState({
          isClicked: !this.isClicked
        });
        e.preventDefault();
      }
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      var isTouchDevice = this.state.isTouchDevice;

      if (isTouchDevice) {
        this.setState({
          isClicked: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          toggle = _this$props.toggle,
          dropdownLeftAligned = _this$props.dropdownLeftAligned,
          dropdownRightAligned = _this$props.dropdownRightAligned,
          isLevel2 = _this$props.isLevel2,
          hasShadow = _this$props.hasShadow,
          noChevron = _this$props.noChevron,
          hasDarkShadow = _this$props.hasDarkShadow,
          isActive = _this$props.isActive,
          contentScrollable = _this$props.contentScrollable,
          toggleAttrs = _this$props.toggleAttrs,
          toggleClasses = _this$props.toggleClasses,
          shouldNotWrapToggle = _this$props.shouldNotWrapToggle,
          toggleIconName = _this$props.toggleIconName,
          isStickedToParent = _this$props.isStickedToParent;
      var _this$state = this.state,
          isClicked = _this$state.isClicked,
          isTouchDevice = _this$state.isTouchDevice;
      var className = classnames({
        'wds-dropdown': !isLevel2,
        'wds-is-active': isClicked || isActive,
        'wds-has-shadow': hasShadow,
        'wds-no-chevron': noChevron,
        'wds-has-dark-shadow': hasDarkShadow,
        'wds-dropdown-level-2': isLevel2,
        'wds-is-touch-device': isTouchDevice,
        'wds-is-sticked-to-parent': isStickedToParent
      });
      var dropdownBody = React.createElement(React.Fragment, null, React.createElement(DropdownToggle, {
        isLevel2: isLevel2,
        attrs: toggleAttrs,
        classes: toggleClasses,
        shouldNotWrap: shouldNotWrapToggle,
        iconName: toggleIconName
      }, toggle), React.createElement(DropdownContent, {
        dropdownLeftAligned: dropdownLeftAligned,
        dropdownRightAligned: dropdownRightAligned,
        isLevel2: isLevel2,
        scrollable: contentScrollable
      }, children));

      if (isLevel2) {
        return (// TODO: Fix a11y
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          React.createElement("li", {
            className: className,
            onClick: this.onClick,
            onMouseLeave: this.onMouseLeave
          }, dropdownBody)
        );
      }

      return (// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        React.createElement("div", {
          className: className,
          onClick: this.onClick,
          onMouseLeave: this.onMouseLeave
        }, dropdownBody)
      );
    }
  }]);

  return Dropdown;
}(React.Component);

Dropdown.propTypes = {
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
   * Hides chevron in dropdown toggle
   */
  noChevron: PropTypes.bool,

  /**
   * Removes span around element passed in the "toggle" prop
   */
  shouldNotWrapToggle: PropTypes.bool,

  /**
   * React Component to display as a dropdown toggle
   */
  toggle: PropTypes.node.isRequired,

  /**
   * HTML attributes to add to toggle
   */
  // eslint-disable-next-line react/forbid-prop-types
  toggleAttrs: PropTypes.object,

  /**
   * HTML classes to add to toggle
   */
  toggleClasses: PropTypes.string,

  /**
   * Customizes icon in dropdown toggle
   */
  toggleIconName: PropTypes.string
};
Dropdown.defaultProps = {
  children: null,
  hasShadow: false,
  noChevron: false,
  hasDarkShadow: false,
  dropdownLeftAligned: false,
  dropdownRightAligned: false,
  contentScrollable: false,
  isLevel2: false,
  isActive: false,
  toggleClasses: '',
  toggleAttrs: {},
  shouldNotWrapToggle: false,
  toggleIconName: 'menu-control-tiny',
  isStickedToParent: false
};

module.exports = Dropdown;
