import React from 'react';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconCheckbox = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "check-box-a",
  d: "M9.293 15.707a.997.997 0 001.414 0l7-7a.999.999 0 10-1.414-1.414L10 13.586l-2.293-2.293a.999.999 0 10-1.414 1.414l3 3zM3 21h18V3H3v18zM22 1H2a1 1 0 00-1 1v20a1 1 0 001 1h20a1 1 0 001-1V2a1 1 0 00-1-1z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#check-box-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCheckbox, props);
});

export default index;
