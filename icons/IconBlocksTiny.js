'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconBlocksTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "blocks-tiny",
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M2 3V2h8v1H2zM0 1a1 1 0 011-1h10a1 1 0 011 1v3a1 1 0 01-1 1H1a1 1 0 01-1-1V1zm2 9V9h8v1H2zM0 8a1 1 0 011-1h10a1 1 0 011 1v3a1 1 0 01-1 1H1a1 1 0 01-1-1V8z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#blocks-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBlocksTiny, props);
});

module.exports = index;
