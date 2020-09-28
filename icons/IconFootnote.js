'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconFootnote = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "footnote-a",
  d: "M22 1h-3a1 1 0 100 2h2v10h-2a1 1 0 100 2h3a1 1 0 001-1V2a1 1 0 00-1-1M9 19c-1.103 0-2 .896-2 2s.897 2 2 2 2-.896 2-2-.897-2-2-2m-6 0c-1.103 0-2 .896-2 2s.897 2 2 2 2-.896 2-2-.897-2-2-2m9-6h-2V3h2a1 1 0 100-2H9a1 1 0 00-1 1v12a1 1 0 001 1h3a1 1 0 100-2m4.383-8.924a.996.996 0 00-1.09.217l-2 2a1 1 0 001.414 1.414L15 7.414V11a1 1 0 102 0V5a.999.999 0 00-.617-.924M15 19c-1.103 0-2 .896-2 2s.897 2 2 2 2-.896 2-2-.897-2-2-2"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#footnote-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconFootnote, props);
});

module.exports = index;
