import React from 'react';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconMessageTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "message-tiny",
  d: "M10 9H2V4.414l3.293 3.293a.999.999 0 001.414 0L10 4.414V9zM8.586 3L6 5.586 3.414 3h5.172zm3.339-1.381A1.003 1.003 0 0011.003 1H.997a.988.988 0 00-.704.293A1.003 1.003 0 000 1.997V10a1 1 0 001 1h10a1 1 0 001-1V1.997a.988.988 0 00-.075-.378z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#message-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconMessageTiny, props);
});

export default index;
