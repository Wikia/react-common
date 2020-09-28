'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconUnlockSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "unlock-small",
  d: "M14 16H4V8h10v8zm1-10H7V4c0-1.104.897-2 2-2 .533 0 1.035.209 1.413.587a.999.999 0 101.414-1.414A3.969 3.969 0 009 0C6.794 0 5 1.795 5 4v2H3a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V7a1 1 0 00-1-1zm-5 4H8a1 1 0 100 2v1a1 1 0 102 0v-1a1 1 0 100-2"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#unlock-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconUnlockSmall, props);
});

module.exports = index;
