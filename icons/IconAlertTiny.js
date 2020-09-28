'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconAlertTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "alert-tiny",
  d: "M7 9.993c0-.554-.447-1.004-1-1.004-.553 0-1 .45-1 1.004H2.618L6 3.203l3.382 6.79H7zm4.895.555L6.895.51c-.34-.68-1.45-.68-1.79 0l-5 10.038A1.002 1.002 0 001 12h10a1.002 1.002 0 00.895-1.452zM5 5.978V6.98c0 .554.447 1.004 1 1.004.553 0 1-.45 1-1.004V5.978c0-.554-.447-1.004-1-1.004-.553 0-1 .45-1 1.004"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#alert-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconAlertTiny, props);
});

module.exports = index;
