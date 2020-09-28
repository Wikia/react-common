'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconSitemapSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "sitemap-small",
  d: "M2 14a1 1 0 001-1v-3h5v3a1 1 0 102 0v-3h5v3a1 1 0 102 0V9a1 1 0 00-1-1h-6V5a1 1 0 10-2 0v3H2a1 1 0 00-1 1v4a1 1 0 001 1M8 2h2a1 1 0 100-2H8a1 1 0 100 2M3 16H1a1 1 0 100 2h2a1 1 0 100-2m14 0h-2a1 1 0 100 2h2a1 1 0 100-2m-7 0H8a1 1 0 100 2h2a1 1 0 100-2"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#sitemap-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconSitemapSmall, props);
});

module.exports = index;
