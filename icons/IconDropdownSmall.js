'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconDropdownSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "dropdown-small-a",
  d: "M8.835 12.958c-.301 0-.603-.115-.833-.345L3.29 7.9a1.178 1.178 0 01.833-2.011h9.424a1.178 1.178 0 01.833 2.01l-4.712 4.713c-.23.23-.531.345-.833.345z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#dropdown-small-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconDropdownSmall, props);
});

module.exports = index;
