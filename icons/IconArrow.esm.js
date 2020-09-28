import React from 'react';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconArrow = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "arrow-a",
  d: "M23 11H3.414l7.293-7.293a.999.999 0 10-1.414-1.414l-9 9a.983.983 0 00-.293.704v.006a.988.988 0 00.293.704l9 9a.997.997 0 001.414 0 .999.999 0 000-1.414L3.414 13H23a1 1 0 100-2"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#arrow-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconArrow, props);
});

export default index;
