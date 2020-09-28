import React from 'react';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconPauseSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "pause-small",
  d: "M12 1a1 1 0 011 1v14a1 1 0 11-2 0V2a1 1 0 011-1zM6 1a1 1 0 011 1v14a1 1 0 11-2 0V2a1 1 0 011-1z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#pause-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconPauseSmall, props);
});

export default index;
