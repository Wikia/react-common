'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconIndentRightTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "indent-right-tiny",
  d: "M1 1a1 1 0 011 1v8a1 1 0 11-2 0V2a1 1 0 011-1zm10.925 4.62a.988.988 0 01.075.377v.006a.988.988 0 01-.293.704l-3 3a.997.997 0 01-1.414 0 1 1 0 010-1.414L8.586 7H5a1 1 0 110-2h3.586L7.293 3.707a1 1 0 011.414-1.414l3 3c.097.097.169.208.218.326z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#indent-right-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconIndentRightTiny, props);
});

module.exports = index;
