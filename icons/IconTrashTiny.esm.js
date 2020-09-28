import React from 'react';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconTrashTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "trash-tiny",
  d: "M10 4a1 1 0 011 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 012 0v5h2V5a1 1 0 012 0v5h2V5a1 1 0 011-1zm1-3a1 1 0 010 2H1a1 1 0 010-2h3a1 1 0 011-1h2a1 1 0 011 1h3z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#trash-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconTrashTiny, props);
});

export default index;
