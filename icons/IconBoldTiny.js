'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconBoldTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "bold-tiny",
  d: "M4 4h2a1.001 1.001 0 000-2H4v2zm0 6h3c1.103 0 2-.896 2-2 0-1.103-.897-2-2-2H4v4zm3 2H3a1 1 0 01-1-1V1a1 1 0 011-1h3a3.004 3.004 0 012.671 4.366A4.007 4.007 0 0111 8c0 2.206-1.794 4-4 4z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#bold-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBoldTiny, props);
});

module.exports = index;
