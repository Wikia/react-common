'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconTagSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "tag-small",
  d: "M16 7.586l-8 8L2.414 10l8-8H16v5.586zM17 0h-7a1 1 0 00-.707.293l-9 9a.999.999 0 000 1.414l7 7a.997.997 0 001.414 0l9-9A.996.996 0 0018 8V1a1 1 0 00-1-1zm-4.5 7c.83 0 1.5-.67 1.5-1.5S13.33 4 12.5 4 11 4.67 11 5.5 11.67 7 12.5 7"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#tag-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconTagSmall, props);
});

module.exports = index;
