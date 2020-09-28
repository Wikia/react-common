'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconPollSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "poll-small",
  d: "M12.294 15h2.824V8h-2.824v7zm-4.706 0h2.824V3H7.588v12zm-4.706 0h2.824v-3H2.882v3zM16.06 6h-3.765V2c0-.553-.422-1-.941-1H6.647c-.52 0-.941.447-.941 1v8H1.94c-.52 0-.941.447-.941 1v5c0 .553.422 1 .941 1h14.12c.52 0 .941-.447.941-1V7c0-.553-.422-1-.941-1z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#poll-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconPollSmall, props);
});

module.exports = index;
