'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconImageTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "image-tiny",
  d: "M10 6.243l-.646-.646a.5.5 0 00-.708 0L7 7.243 3.854 4.097a.5.5 0 00-.708 0L2 5.243V2h8v4.243zM10 10H2V6.657l1.5-1.5 3.146 3.147a.502.502 0 00.708 0L9 6.657l1 1V10zm1-10H1a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V1a1 1 0 00-1-1zM6.65 4.35c.09.1.22.15.35.15.07 0 .13-.01.19-.04.06-.02.12-.06.16-.11.05-.04.09-.1.11-.16.03-.06.04-.12.04-.19a.472.472 0 00-.15-.35.355.355 0 00-.16-.11.495.495 0 00-.54.11.472.472 0 00-.15.35c0 .07.01.13.04.19.02.06.06.12.11.16"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#image-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconImageTiny, props);
});

module.exports = index;
