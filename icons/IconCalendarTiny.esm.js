import React from 'react';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconCalendarTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "calendar-tiny",
  d: "M2 5h8V3H9a1 1 0 11-2 0H5a1 1 0 11-2 0H2v2zm0 5h8V7H2v3zm9 2H1a1 1 0 01-1-1V2a1 1 0 011-1h2a1 1 0 012 0h2a1 1 0 012 0h2a1 1 0 011 1v9a1 1 0 01-1 1z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#calendar-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCalendarTiny, props);
});

export default index;
