import React from 'react';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconPoll = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "poll-a",
  d: "M17 21h5V10h-5v11zm-7-6V3h5v18h-5v-6zm-7 6h5v-5H3v5zM23 8h-6V2a1 1 0 00-1-1H9a1 1 0 00-1 1v12H2a1 1 0 00-1 1v7a1 1 0 001 1h21a1 1 0 001-1V9a1 1 0 00-1-1z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#poll-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconPoll, props);
});

export default index;
