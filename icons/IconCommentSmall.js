'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconCommentSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "comment-small",
  d: "M7 3C4.794 3 3 4.795 3 7c0 1.062.418 2.064 1.177 2.822A3.966 3.966 0 007 11a1 1 0 011 1v1.586l2.293-2.293A.997.997 0 0111 11c2.206 0 4-1.795 4-4a3.97 3.97 0 00-1.177-2.823A3.97 3.97 0 0011 3H7zm0 14a1 1 0 01-1-1v-3.084a5.96 5.96 0 01-3.237-1.68A5.951 5.951 0 011 7c0-3.309 2.691-6 6-6h4c1.595 0 3.1.626 4.237 1.762A5.96 5.96 0 0117 7a6.007 6.007 0 01-5.571 5.984l-3.722 3.723A1 1 0 017 17z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#comment-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCommentSmall, props);
});

module.exports = index;
