'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconZoomInTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "zoom-in-tiny",
  d: "M4 9a1 1 0 110 2H2a1 1 0 01-1-1V8a1 1 0 112 0v1h1zm0-8a1 1 0 110 2H3v1a1 1 0 11-2 0V2a1 1 0 011-1h2zm6 6a1 1 0 011 1v2a1 1 0 01-1 1H8a1 1 0 110-2h1V8a1 1 0 011-1zm0-6a1 1 0 011 1v2a1 1 0 11-2 0V3H8a1 1 0 110-2h2z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#zoom-in-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconZoomInTiny, props);
});

module.exports = index;
