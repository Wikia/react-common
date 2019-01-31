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
  bigItems: PropTypes.bool,
  boldItems: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  hasEllipsis: PropTypes.bool,
  isLinked: PropTypes.bool,
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

module.exports = List;
