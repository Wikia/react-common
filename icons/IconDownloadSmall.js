'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconDownloadSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "download-small",
  d: "M16 12a1 1 0 00-1 1v2H3v-2a1 1 0 10-2 0v3a1 1 0 001 1h14a1 1 0 001-1v-3a1 1 0 00-1-1m-7.707.707a1.009 1.009 0 00.704.293h.006a.988.988 0 00.704-.293l5-5a.999.999 0 10-1.414-1.414L10 9.586V2a1 1 0 10-2 0v7.586L4.707 6.293a.999.999 0 10-1.414 1.414l5 5z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#download-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconDownloadSmall, props);
});

module.exports = index;
