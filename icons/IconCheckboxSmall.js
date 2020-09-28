'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconCheckboxSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "check-box-small",
  d: "M3 15h12V3H3v12zM16 1H2a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V2a1 1 0 00-1-1zM7.293 11.707a.997.997 0 001.414 0l4-4a.999.999 0 10-1.414-1.414L8 9.586 6.707 8.293a.999.999 0 10-1.414 1.414l2 2z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#check-box-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCheckboxSmall, props);
});

module.exports = index;
