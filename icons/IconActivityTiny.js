'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconActivityTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "activity-tiny",
  d: "M8 12.001a.87.87 0 01-.349-.063l-.002-.001a.365.365 0 01-.035-.014l-.002-.001a.986.986 0 01-.541-.55L3.993 3.676 2.988 6.149A.999.999 0 012 7h-.008a.352.352 0 01-.046 0H1a1 1 0 110-2h.296L3.072.626l.005-.011V.613A.996.996 0 014.005 0c.114.001.23.021.343.063h.002l.035.014a.986.986 0 01.543.552l3.078 7.696 1.005-2.473A1 1 0 0110 5h1a1 1 0 010 2h-.297l-1.776 4.375-.005.011v.001a1.005 1.005 0 01-.922.614"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#activity-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconActivityTiny, props);
});

module.exports = index;
