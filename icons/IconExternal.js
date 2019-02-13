'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconExternal = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M10 15a.999.999 0 0 1-.707-1.707L19.586 3H14a1 1 0 1 1 0-2h8.003a.988.988 0 0 1 .704.293.998.998 0 0 1 .293.704V10a1 1 0 1 1-2 0V4.414L10.707 14.707A.997.997 0 0 1 10 15m8 8H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H3v14h14v-8a1 1 0 1 1 2 0v9a1 1 0 0 1-1 1" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconExternal, props);
});

module.exports = index;