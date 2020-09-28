'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconBookTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "book-tiny",
  d: "M3.5 3C2.673 3 2 3.673 2 4.5v2.338c.91-.434 2.09-.434 3 0V4.5c0-.397-.159-.785-.437-1.063A1.513 1.513 0 003.5 3m5 3.5c.537 0 1.045.121 1.5.338V4.5c0-.397-.159-.785-.437-1.063A1.502 1.502 0 007 4.5v2.338A3.473 3.473 0 018.5 6.5M11 11a1 1 0 01-1-1c0-.827-.673-1.5-1.5-1.5S7 9.173 7 10a1 1 0 11-2 0c0-.827-.673-1.5-1.5-1.5S2 9.173 2 10a1 1 0 11-2 0V4.5a3.504 3.504 0 015.977-2.477l.026.027A3.489 3.489 0 018.5 1c.937 0 1.817.363 2.477 1.023A3.524 3.524 0 0112 4.5V10a1 1 0 01-1 1"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#book-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBookTiny, props);
});

module.exports = index;
