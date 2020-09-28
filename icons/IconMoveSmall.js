'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconMoveSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "move-small",
  d: "M17.102 9L13.5 6.3v1.802H9.898V4.5H11.7L9 .898 6.3 4.5h1.802v3.602H4.5V6.3L.898 9 4.5 11.7V9.897h3.602V13.5H6.3L9 17.102l2.7-3.602H9.897V9.898H13.5V11.7zm0 0"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#move-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconMoveSmall, props);
});

module.exports = index;
