'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconRefreshTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "reload-tiny", d: "M11 0a1 1 0 0 0-1 1v.521A5.974 5.974 0 0 0 8.532.558C6.637-.327 4.239-.118 2.52 1.11A5.987 5.987 0 0 0 0 6c0 1.266.389 2.472 1.111 3.48A5.987 5.987 0 0 0 6 12a5.963 5.963 0 0 0 4.243-1.757 1 1 0 0 0-1.414-1.414A3.971 3.971 0 0 1 5.744 9.99l-.157-.014a3.979 3.979 0 0 1-3.564-3.583 4.03 4.03 0 0 1 .101-1.378 3.979 3.979 0 0 1 1.148-1.941 4.002 4.002 0 0 1 2.335-1.052l.123-.011c.176-.012.352-.013.528-.001l.151.014a3.97 3.97 0 0 1 2.42 1.147.946.946 0 0 0 .074.068c.22.231.409.487.566.761H8a1 1 0 0 0 0 2h2.879a.254.254 0 0 0 .039 0H11a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#reload-tiny" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconRefreshTiny, props);
});

module.exports = index;
