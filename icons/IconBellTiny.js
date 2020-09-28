'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconBellTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "bell-tiny",
  d: "M4.18 6l.478-2.862A1.357 1.357 0 016 2c.668 0 1.233.478 1.343 1.138L7.82 6H4.18zm5.136-3.192A3.353 3.353 0 006 0a3.352 3.352 0 00-3.315 2.808l-.671 4.027a.993.993 0 00.224.811A.998.998 0 003 8h6a1 1 0 00.987-1.165l-.671-4.027zM7 10H5a1 1 0 100 2h2a1 1 0 100-2"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#bell-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBellTiny, props);
});

module.exports = index;
