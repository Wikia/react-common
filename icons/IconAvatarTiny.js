'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconAvatarTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "user-avatar-tiny",
  d: "M9.667 7.606A4.979 4.979 0 006 6c-1.419 0-2.739.6-3.666 1.606A4.004 4.004 0 016 2a4.003 4.003 0 013.667 5.606M3.604 9.205a2.983 2.983 0 014.793 0c-1.379 1.033-3.414 1.033-4.793 0M6 0C2.692 0 0 2.691 0 6c0 1.524.57 2.975 1.606 4.088l.005.006A6.047 6.047 0 006 12h.029a6.054 6.054 0 004.361-1.906l.004-.004A5.98 5.98 0 0012 6c0-3.309-2.691-6-6-6m.71 3.29c-.05-.04-.1-.09-.15-.12a.757.757 0 00-.18-.09.639.639 0 00-.18-.06c-.33-.07-.68.042-.91.27-.09.1-.16.21-.21.33A1 1 0 005 4c0 .26.11.52.29.71.19.18.45.29.71.29.07 0 .13-.01.2-.02.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12C6.89 4.52 7 4.26 7 4a1 1 0 00-.08-.38 1.164 1.164 0 00-.21-.33"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#user-avatar-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconAvatarTiny, props);
});

module.exports = index;
