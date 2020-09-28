import React from 'react';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconPause = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "pause-a",
  d: "M8 1a1 1 0 00-1 1v20a1 1 0 102 0V2a1 1 0 00-1-1m8 0a1 1 0 00-1 1v20a1 1 0 102 0V2a1 1 0 00-1-1"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#pause-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconPause, props);
});

export default index;
