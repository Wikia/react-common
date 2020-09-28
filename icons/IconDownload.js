'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconDownload = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "download-a",
  d: "M11.293 16.707a1.009 1.009 0 00.704.293h.006a.988.988 0 00.704-.293l7-7a.999.999 0 10-1.414-1.414L13 13.586V2a1 1 0 10-2 0v11.586L5.707 8.293a.999.999 0 10-1.414 1.414l7 7zM22 16a1 1 0 00-1 1v4H3v-4a1 1 0 10-2 0v5a1 1 0 001 1h20a1 1 0 001-1v-5a1 1 0 00-1-1"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#download-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconDownload, props);
});

module.exports = index;
