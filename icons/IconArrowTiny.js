'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconArrowTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "aarow-tiny",
  d: "M5 11a.997.997 0 01-.707-.293l-4-4A.983.983 0 010 6.003v-.006a.988.988 0 01.293-.704l4-4a.999.999 0 111.414 1.414L3.414 5H11a1 1 0 110 2H3.414l2.293 2.293A.999.999 0 015 11"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#aarow-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconArrowTiny, props);
});

module.exports = index;
