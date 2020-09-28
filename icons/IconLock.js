'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconLock = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "lock-a",
  d: "M10 15h1v3a1 1 0 102 0v-3h1a1 1 0 100-2h-4a1 1 0 100 2m-5 7h14V10H5v12zM9 5c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V5zm11 3h-3V5c0-2.757-2.243-5-5-5S7 2.243 7 5v3H4a1 1 0 00-1 1v14a1 1 0 001 1h16a1 1 0 001-1V9a1 1 0 00-1-1z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#lock-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconLock, props);
});

module.exports = index;
