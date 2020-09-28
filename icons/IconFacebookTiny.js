'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconFacebookTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "facebook-tiny",
  d: "M8.857 2.06H7.786c-.857 0-1 .425-1 .993v1.35h2.071l-.214 2.13H6.929V12H4.786V6.533H3v-2.13h1.786V2.84C4.786 1.065 5.857 0 7.429 0 8.143 0 8.786.071 9 .071v1.988h-.143z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#facebook-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconFacebookTiny, props);
});

module.exports = index;
