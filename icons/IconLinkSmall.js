'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconLinkSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "link-small",
  d: "M9.605 6.98a.999.999 0 011.414 0 5.183 5.183 0 010 7.322l-1.181 1.181A5.148 5.148 0 016.177 17a5.144 5.144 0 01-3.66-1.517A5.142 5.142 0 011 11.823a5.14 5.14 0 011.517-3.66.999.999 0 111.414 1.413A3.155 3.155 0 003 11.822c0 .85.331 1.647.931 2.248 1.2 1.2 3.293 1.2 4.493 0l1.181-1.181a3.181 3.181 0 000-4.494.999.999 0 010-1.414zm5.89-4.476A5.104 5.104 0 0117 6.134a5.103 5.103 0 01-1.504 3.633 1 1 0 01-1.414-1.414c.592-.593.918-1.38.918-2.218 0-.837-.326-1.624-.918-2.217-1.185-1.184-3.25-1.184-4.434 0l-1.17 1.17a3.114 3.114 0 00-.918 2.217c0 .838.326 1.625.918 2.217a.999.999 0 11-1.414 1.414A5.099 5.099 0 015.56 7.305c0-1.371.534-2.661 1.504-3.631l1.17-1.17A5.102 5.102 0 0111.864 1a5.1 5.1 0 013.632 1.504z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#link-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconLinkSmall, props);
});

module.exports = index;
