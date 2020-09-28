'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconHomeSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "home-small",
  d: "M12 15h2V8.414l-5-5-5 5V15h2v-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3zm3 2h-4a1 1 0 01-1-1v-4c0-.55-.449-1-1-1-.551 0-1 .45-1 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1V8c0-.266.105-.52.293-.707l6-6a.999.999 0 011.414 0l6 6A.996.996 0 0116 8v8a1 1 0 01-1 1z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#home-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconHomeSmall, props);
});

module.exports = index;
