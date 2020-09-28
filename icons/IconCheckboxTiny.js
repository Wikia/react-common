'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconCheckboxTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "check-box-tiny",
  d: "M2 10h8V2H2v8zm9-10H1a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V1a1 1 0 00-1-1zM4.293 7.707a.997.997 0 001.414 0l3-3a.999.999 0 10-1.414-1.414L5 5.586l-.293-.293a.999.999 0 10-1.414 1.414l1 1z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#check-box-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCheckboxTiny, props);
});

module.exports = index;
