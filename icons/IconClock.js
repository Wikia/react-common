'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconClock = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, props), React.createElement("path", {
  d: "M18 11h-5V6a1 1 0 10-2 0v6a1 1 0 001 1h6a1 1 0 100-2m-6 11C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10m0-22C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconClock, props);
});

module.exports = index;
