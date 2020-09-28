'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconBookmarkTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "bookmark-tiny",
  d: "M10 9.605L6.371 8.154a1.01 1.01 0 00-.742 0L2 9.605V2h8v7.605zM11 0H1a1 1 0 00-1 1v10.083a1.001 1.001 0 001.371.928L6 10.16l4.629 1.851a.992.992 0 00.932-.1c.274-.187.439-.496.439-.828V1a1 1 0 00-1-1zM5 5.917a1 1 0 102 0 1 1 0 100-2 1 1 0 10-2 0 1 1 0 100 2"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#bookmark-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBookmarkTiny, props);
});

module.exports = index;
