'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconShare = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M5 16a3.984 3.984 0 0 0 2.861-1.213l7.295 4.168A3.964 3.964 0 0 0 15 20c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4a3.984 3.984 0 0 0-2.861 1.213l-7.295-4.168C8.935 12.71 9 12.364 9 12c0-.364-.065-.71-.156-1.045l7.295-4.168A3.984 3.984 0 0 0 19 8c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4c0 .364.065.71.156 1.045L7.861 9.213A3.984 3.984 0 0 0 5 8c-2.206 0-4 1.794-4 4s1.794 4 4 4", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconShare, props);
});

module.exports = index;
