'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconMoveTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "move-tiny",
  d: "M11.398 6L9 4.2v1.198H6.602V3H7.8L6 .602 4.2 3h1.198v2.398H3V4.2L.602 6 3 7.8V6.603h2.398V9H4.2L6 11.398 7.8 9H6.603V6.602H9V7.8zm0 0"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#move-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconMoveTiny, props);
});

module.exports = index;
