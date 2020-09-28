'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconControlsTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "controls-tiny",
  d: "M4 8a1 1 0 011 1v2a1 1 0 01-2 0H1a1 1 0 010-2h2a1 1 0 011-1zM1 3a1 1 0 010-2h2a1 1 0 012 0v2a1 1 0 01-2 0H1zm10 6a1 1 0 010 2H8a1 1 0 010-2h3zM8 3a1 1 0 010-2h3a1 1 0 010 2H8zm3 1a1 1 0 011 1v2a1 1 0 01-2 0H1a1 1 0 010-2h9a1 1 0 011-1z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#controls-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconControlsTiny, props);
});

module.exports = index;
