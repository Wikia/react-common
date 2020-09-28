'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconParagraph = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "paragraph-a",
  d: "M7.5 12a5.5 5.5 0 010-11H12a1 1 0 011 1v9a1 1 0 01-1 1H7.5zM11 3H7.5a3.5 3.5 0 000 7H11V3zm0 0c-1.333 0-1.333-2 0-2h11c1.333 0 1.333 2 0 2h-3v19c0 1.333-2 1.333-2 0V3h-4v19c0 1.333-2 1.333-2 0V3z"
})), React.createElement("use", {
  xlinkHref: "#paragraph-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconParagraph, props);
});

module.exports = index;
