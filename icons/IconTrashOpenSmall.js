'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconTrashOpenSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "trash-empty-small",
  d: "M6 10a1 1 0 112 0v3a1 1 0 11-2 0v-3zM4 4a1 1 0 01-.371-1.929l5-2a1 1 0 01.742 1.858l-5 2a1.006 1.006 0 01-.371.07zm6 5a1 1 0 112 0v4a1 1 0 11-2 0V9zm5-3a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 01-.383-1.924l12.935-5.357a1 1 0 01.765 1.847L4 8.253v7.745h10V7a1 1 0 011-1z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#trash-empty-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconTrashOpenSmall, props);
});

module.exports = index;
