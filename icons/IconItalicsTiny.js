'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconItalicsTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "italics-tiny",
  d: "M4 12.001L3.977 12H2a1 1 0 110-2h1.323l3.2-8H5a1 1 0 110-2h5a1 1 0 110 2H8.678l-3.2 8H7a1 1 0 110 2H4.023L4 12.001"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#italics-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconItalicsTiny, props);
});

module.exports = index;
