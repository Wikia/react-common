import React from 'react';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconAddSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "add-small",
  d: "M16 8h-6V2a1 1 0 10-2 0v6H2a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#add-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconAddSmall, props);
});

export default index;
