'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconMenuControlTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg"
}, props), React.createElement("path", {
  d: "M11.707 3.293a.999.999 0 00-1.414 0L6 7.586 1.707 3.293A.999.999 0 10.293 4.707l5 5a.997.997 0 001.414 0l5-5a.999.999 0 000-1.414",
  fillRule: "evenodd"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconMenuControlTiny, props);
});

module.exports = index;
