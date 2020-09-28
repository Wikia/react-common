'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconArrowSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "arrow-small",
  d: "M8 17a.997.997 0 01-.707-.293l-7-7A.983.983 0 010 9.003v-.006a.988.988 0 01.293-.704l7-7a.999.999 0 111.414 1.414L3.414 8H17a1 1 0 110 2H3.414l5.293 5.293A.999.999 0 018 17"
})), React.createElement("use", {
  xlinkHref: "#arrow-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconArrowSmall, props);
});

module.exports = index;
