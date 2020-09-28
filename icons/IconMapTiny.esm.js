import React from 'react';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconMapTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "map-tiny",
  d: "M10 9.22l-2 .499V2.782l2-.501V9.22zM2 2.721l2-.667v6.958c-.071 0-.138.011-.207.025-.037.009-.073.002-.109.015L2 9.613V2.721zm3-.333l1.684.561c.032.011.065.008.097.016.043.01.084.017.128.021.03.003.061.015.091.015v6.946L5 9.28V2.388zM11.615.212a.995.995 0 00-.858-.181L7.04.959 4.316.052C4.279.039 4.242.045 4.204.037A.99.99 0 004 .012a.998.998 0 00-.204.025c-.037.008-.075.002-.112.015l-3 1A.999.999 0 000 2v9a1 1 0 001.316.949L4 11.054l2.684.895a1 1 0 00.316.052l.018-.003a.976.976 0 00.225-.028l4-1A1 1 0 0012 10V1c0-.307-.142-.598-.385-.788z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#map-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconMapTiny, props);
});

export default index;
