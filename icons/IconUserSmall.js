'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconUserSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "user-small",
  d: "M9 3c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2m0 6C6.794 9 5 7.206 5 5s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m5 8a1 1 0 01-1-1c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 11-2 0c0-3.309 2.691-6 6-6s6 2.691 6 6a1 1 0 01-1 1"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#user-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconUserSmall, props);
});

module.exports = index;
