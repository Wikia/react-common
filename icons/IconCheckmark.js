'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconCheckmark = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, props), React.createElement("path", {
  d: "M8 20a.997.997 0 01-.707-.293l-7-7a.999.999 0 111.414-1.414L8 17.586 22.293 3.293a.999.999 0 111.414 1.414l-15 15A.997.997 0 018 20"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCheckmark, props);
});

module.exports = index;
