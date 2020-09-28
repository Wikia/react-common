'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconPlayTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "play-tiny",
  d: "M2 8.522V3.477L8.308 6 2 8.522zm9.372-3.45l-10-4a1.006 1.006 0 00-.933.1A1.004 1.004 0 000 2v8a1.003 1.003 0 001 1c.125 0 .251-.024.372-.072l10-4a1 1 0 000-1.857z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#play-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconPlayTiny, props);
});

module.exports = index;
