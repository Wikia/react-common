'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

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
 * **NOTE**: This component should only be used with `<Switch.Item>`,
 * see `<Switch>` above for a complete example.
 */

var SwitchWrapper = function SwitchWrapper(_ref) {
  var children = _ref.children,
      className = _ref.className;
  var allClassNames = classnames('switch-wrapper', className);
  return React.createElement("div", {
    className: allClassNames
  }, children);
};

SwitchWrapper.propTypes = {
  /** @ignore */
  children: PropTypes.node.isRequired,

  /** Additional class name */
  className: PropTypes.string
};
SwitchWrapper.defaultProps = {
  className: undefined
};

/**
 * **NOTE**: This component should only be used with `<Switch.Wrapper>`,
 * see `<Switch>` above for a complete example.
 */

var SwitchItem = function SwitchItem(_ref) {
  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      onClick = _ref.onClick;
  var allClassNames = classnames('switch-item', className, {
    'switch-item__active': active
  });
  return React.createElement("button", {
    type: "button",
    className: allClassNames,
    onClick: onClick
  }, children);
};

SwitchItem.propTypes = {
  /** is the current item active */
  active: PropTypes.bool,

  /** @ignore */
  children: PropTypes.node.isRequired,

  /** Additional class name */
  className: PropTypes.string,

  /** Function fired when clicking on the element */
  onClick: PropTypes.func
};
SwitchItem.defaultProps = {
  active: false,
  className: undefined,
  onClick: undefined
};

/**
 * `<Switch>` component is built from two sub-components,
 * `<Switch.Wrapper>` and `<Switch.Item>`.
 *
 * @component
 */

var index = {
  Wrapper: SwitchWrapper,
  Item: SwitchItem
};

module.exports = index;
