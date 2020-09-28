'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconBold = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "bold-a",
  d: "M6 10h4c2.206 0 4-1.795 4-4s-1.794-4-4-4H6v8zm0 12h7c2.757 0 5-2.243 5-5s-2.243-5-5-5H6v10zm7 2H5a1 1 0 01-1-1V1a1 1 0 011-1h5c3.309 0 6 2.691 6 6a5.982 5.982 0 01-1.652 4.131C17.565 10.76 20 13.602 20 17c0 3.859-3.14 7-7 7z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#bold-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBold, props);
});

module.exports = index;
