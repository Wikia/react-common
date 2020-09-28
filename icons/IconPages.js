'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconPages = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "pages-a",
  d: "M4 22h12V7H4v15zM17 5H3a1 1 0 00-1 1v17a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1zm5-5H8a1 1 0 100 2h13v16a1 1 0 102 0V1a1 1 0 00-1-1"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#pages-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconPages, props);
});

module.exports = index;
