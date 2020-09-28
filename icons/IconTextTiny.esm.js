import React from 'react';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconTextTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "text-tiny",
  d: "M8 12H4a1 1 0 110-2h1V2H3a1 1 0 11-2 0V1a1 1 0 011-1h8a1 1 0 011 1v1a1 1 0 11-2 0H7v8h1a1 1 0 010 2"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#text-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconTextTiny, props);
});

export default index;
