'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconParagraphSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "paragraph-small",
  d: "M12 16V3H8C6.667 3 6.667 1 8 1h8c1.333 0 1.333 2 0 2h-2v13c0 1.333-2 1.333-2 0zm-5 0V8c0-1.333 2-1.333 2 0v8c0 1.333-2 1.333-2 0zM7 3H5a2 2 0 100 4h2V3zM5 1h3a1 1 0 011 1v6a1 1 0 01-1 1H5a4 4 0 110-8z"
})), React.createElement("use", {
  xlinkHref: "#paragraph-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconParagraphSmall, props);
});

module.exports = index;
