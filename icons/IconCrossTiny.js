'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconCrossTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "cross-tiny",
  d: "M7.426 6.001l4.278-4.279A1.008 1.008 0 1010.278.296L6 4.574 1.723.296A1.008 1.008 0 10.295 1.722l4.278 4.28-4.279 4.277a1.008 1.008 0 101.427 1.426L6 7.427l4.278 4.278a1.006 1.006 0 001.426 0 1.008 1.008 0 000-1.426L7.425 6.001z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#cross-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCrossTiny, props);
});

module.exports = index;
