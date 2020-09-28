'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconLink = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "link-a",
  d: "M13.109 9.47a.999.999 0 000 1.414 5.28 5.28 0 010 7.458L12 19.45a5.28 5.28 0 01-7.459 0 5.28 5.28 0 010-7.458.999.999 0 10-1.414-1.414c-2.836 2.836-2.836 7.45 0 10.287a7.255 7.255 0 005.144 2.126 7.255 7.255 0 005.143-2.126l1.109-1.11a7.222 7.222 0 002.13-5.142c0-1.944-.756-3.77-2.13-5.144a.999.999 0 00-1.414 0m7.757-6.343C18.03.29 13.416.29 10.579 3.126L9.47 4.236a7.224 7.224 0 00-2.13 5.143c0 1.943.756 3.769 2.13 5.144a.996.996 0 00.707.292 1 1 0 00.707-1.707 5.28 5.28 0 010-7.458l1.11-1.109a5.28 5.28 0 017.458 0 5.28 5.28 0 010 7.458.999.999 0 101.414 1.414c2.836-2.836 2.836-7.45 0-10.286"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#link-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconLink, props);
});

module.exports = index;
