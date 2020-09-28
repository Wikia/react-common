import React from 'react';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconCrossSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "cross-small",
  d: "M10.414 9l6.293-6.293a.999.999 0 10-1.414-1.414L9 7.586 2.707 1.293a.999.999 0 10-1.414 1.414L7.586 9l-6.293 6.293a.999.999 0 101.414 1.414L9 10.414l6.293 6.293a.997.997 0 001.414 0 .999.999 0 000-1.414L10.414 9z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#cross-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCrossSmall, props);
});

export default index;
