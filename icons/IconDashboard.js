'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconDashboard = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, props), React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 21.818c-3.844 0-7.172-2.227-8.782-5.454h17.564c-1.61 3.227-4.938 5.454-8.782 5.454m0-19.636c5.413 0 9.818 4.405 9.818 9.818 0 .75-.093 1.478-.253 2.182h-6.779L9.652 5.967a1.092 1.092 0 00-1.85 1.157l4.412 7.058h-9.78A9.794 9.794 0 012.183 12c0-5.413 4.405-9.818 9.818-9.818M12 0C5.384 0 0 5.384 0 12s5.384 12 12 12 12-5.384 12-12S18.616 0 12 0"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconDashboard, props);
});

module.exports = index;
