'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconMagnifyingGlassTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12 12" }, props),
    React.createElement("path", { fillRule: "evenodd", d: "M1.5 5c0-1.93 1.57-3.5 3.5-3.5S8.5 3.07 8.5 5 6.93 8.5 5 8.5 1.5 6.93 1.5 5m10.28 5.72L9.014 7.953C9.626 7.123 10 6.108 10 5c0-2.757-2.243-5-5-5S0 2.243 0 5s2.243 5 5 5a4.95 4.95 0 0 0 2.953-.987l2.767 2.767c.146.147.338.22.53.22a.749.749 0 0 0 .53-1.28" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconMagnifyingGlassTiny, props);
});

module.exports = index;
