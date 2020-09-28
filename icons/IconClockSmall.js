'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconClockSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  viewBox: "0 0 18 18",
  xmlns: "http://www.w3.org/2000/svg"
}, props), React.createElement("path", {
  d: "M9 16c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7M9 0C4.037 0 0 4.037 0 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9m4 8h-3V5a1 1 0 10-2 0v4a1 1 0 001 1h4a1 1 0 100-2"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconClockSmall, props);
});

module.exports = index;
