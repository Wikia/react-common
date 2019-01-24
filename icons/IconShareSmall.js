'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconShareSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement("path", { d: "M4.545 11.667c.714 0 1.358-.312 1.821-.809l4.642 2.779a2.76 2.76 0 0 0-.099.696c0 1.471 1.142 2.667 2.546 2.667C14.858 17 16 15.804 16 14.333c0-1.47-1.142-2.666-2.545-2.666-.714 0-1.358.311-1.821.808L6.992 9.697A2.76 2.76 0 0 0 7.091 9a2.76 2.76 0 0 0-.1-.697l4.643-2.778a2.481 2.481 0 0 0 1.82.808C14.859 6.333 16 5.137 16 3.667 16 2.196 14.858 1 13.455 1c-1.404 0-2.546 1.196-2.546 2.667 0 .242.041.473.1.696L6.365 7.142a2.481 2.481 0 0 0-1.82-.809C3.141 6.333 2 7.53 2 9c0 1.47 1.142 2.667 2.545 2.667" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconShareSmall, props);
});

module.exports = index;
