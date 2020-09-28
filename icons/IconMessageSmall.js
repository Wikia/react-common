'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconMessageSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "message-small",
  d: "M3.414 4L9 9.586 14.586 4H3.414zM2 14h14V5.414l-6.293 6.293a.999.999 0 01-1.414 0L2 5.414V14zm15 2H1a1 1 0 01-1-1V2.997a.988.988 0 01.293-.704A1.009 1.009 0 01.997 2h16.006a.988.988 0 01.704.293.983.983 0 01.293.704V15a1 1 0 01-1 1z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#message-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconMessageSmall, props);
});

module.exports = index;
