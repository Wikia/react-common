'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconBulletList = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "bulleted-list-a",
  d: "M3.006 19.995c-.553 0-1.006.451-1.006 1.004 0 .553.453 1.005 1.006 1.005.553 0 1.004-.452 1.004-1.005 0-.553-.451-1.004-1.004-1.004M10 4.005h11a.999.999 0 100-2H10a.999.999 0 100 2m-6.995 6.992c-.553 0-1.006.452-1.006 1.005 0 .553.453 1.005 1.006 1.005.553 0 1.004-.452 1.004-1.005 0-.553-.451-1.005-1.004-1.005m0-8.997C2.453 2 2 2.452 2 3.005a1.006 1.006 0 002.01 0C4.01 2.452 3.56 2 3.006 2M21 11.002H10a.999.999 0 100 2h11a.999.999 0 100-2M21 20H10a.999.999 0 100 2h11a.999.999 0 100-2"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#bulleted-list-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBulletList, props);
});

module.exports = index;
