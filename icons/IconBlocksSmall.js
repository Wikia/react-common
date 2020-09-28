'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconBlocksSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  id: "blocks-small",
  d: "M3 6V3h12v3H3zM1 2a1 1 0 011-1h14a1 1 0 011 1v5a1 1 0 01-1 1H2a1 1 0 01-1-1V2zm2 13v-3h12v3H3zm-2-4a1 1 0 011-1h14a1 1 0 011 1v5a1 1 0 01-1 1H2a1 1 0 01-1-1v-5z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#blocks-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBlocksSmall, props);
});

module.exports = index;
