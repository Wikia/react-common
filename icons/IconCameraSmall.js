'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconCameraSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "camera-small",
  d: "M15 15H3V7h1c.266 0 .52-.105.707-.293L7.414 4h3.172l2.707 2.707A.996.996 0 0014 7h1v8zm1-10h-1.586l-2.707-2.707A.996.996 0 0011 2H7a.996.996 0 00-.707.293L3.586 5H2a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1zm-7 6a1.001 1.001 0 010-2 1.001 1.001 0 010 2m0-4c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zM2 4a1 1 0 110-2h1a1 1 0 110 2H2z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#camera-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCameraSmall, props);
});

module.exports = index;
