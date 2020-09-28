'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconCommentTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "comment-tiny",
  d: "M4.5 2c-.668 0-1.293.26-1.757.731A2.459 2.459 0 002 4.5c0 1.235.92 2.297 2.141 2.47A1 1 0 015 7.96v.626l1.293-1.293A.997.997 0 017 7h.5c.668 0 1.293-.26 1.757-.731.483-.476.743-1.1.743-1.769C10 3.122 8.878 2 7.5 2h-3zM4 12a1 1 0 01-1-1V8.739A4.52 4.52 0 010 4.5c0-1.208.472-2.339 1.329-3.183A4.424 4.424 0 014.5 0h3C9.981 0 12 2.019 12 4.5a4.432 4.432 0 01-1.329 3.183A4.424 4.424 0 017.5 9h-.086l-2.707 2.707A1 1 0 014 12z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#comment-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCommentTiny, props);
});

module.exports = index;
