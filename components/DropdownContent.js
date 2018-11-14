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
  children: PropTypes.node,
  dropdownLeftAligned: PropTypes.bool,
  dropdownRightAligned: PropTypes.bool,
  scrollable: PropTypes.bool,
  isLevel2: PropTypes.bool
};
DropdownContent.defaultProps = {
  children: null,
  dropdownLeftAligned: false,
  dropdownRightAligned: false,
  scrollable: true,
  isLevel2: false
};

module.exports = DropdownContent;
