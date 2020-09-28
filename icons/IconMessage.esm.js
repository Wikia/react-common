import React from 'react';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconMessage = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "message-a",
  d: "M3.414 5L12 13.586 20.586 5H3.414zM2 19h20V6.414l-9.293 9.293a.999.999 0 01-1.414 0L2 6.414V19zm21 2H1a1 1 0 01-1-1V3.997a.988.988 0 01.293-.704A1.009 1.009 0 01.997 3h22.006a.988.988 0 01.704.293.983.983 0 01.293.704V20a1 1 0 01-1 1z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#message-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconMessage, props);
});

export default index;
