'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconActivitySmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "activity-small",
  d: "M12 17a1 1 0 01-.919-.605L6 4.539 3.919 9.395A1 1 0 013 10H1a1 1 0 110-2h1.341l2.74-6.395a1 1 0 011.838 0L12 13.461l2.081-4.856A1 1 0 0115 8h2a1 1 0 110 2h-1.341l-2.74 6.395A1 1 0 0112 17"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#activity-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconActivitySmall, props);
});

module.exports = index;
