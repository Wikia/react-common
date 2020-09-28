import React from 'react';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconPlaySmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "play-small",
  d: "M4 5.5v7L12.4 9 4 5.5zM3 15a1.002 1.002 0 01-1-1V4a1.001 1.001 0 011.385-.922l12 5a1 1 0 010 1.846l-12 5A.995.995 0 013 15z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#play-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconPlaySmall, props);
});

export default index;
