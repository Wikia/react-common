'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconPagesSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "pages-small",
  d: "M3 16h8V6H3v10zm9-12a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1h10zm4-4a1 1 0 011 1v12a1 1 0 11-2 0V2H6a1 1 0 110-2h10z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#pages-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconPagesSmall, props);
});

module.exports = index;
