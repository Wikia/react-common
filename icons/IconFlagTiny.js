'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconFlagTiny = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "flag-tiny",
  d: "M3 7h5L6.59 5.707A.957.957 0 016.27 5a.96.96 0 01.32-.707L8 3H3v4zm-1 5a1 1 0 01-1-1V1a1 1 0 112 0h7.03l.003.001h.017a1 1 0 01.942.872v.001c.008.064.01.128.006.191v.002a.997.997 0 01-.283.631v.001l-.002.002-.001.001-.001.001-.002.002-.002.002L8.414 5l2.293 2.293.003.003.001.001.001.001.001.001.002.002v.001a.997.997 0 01.283.631v.002a1.02 1.02 0 01-.006.191v.001a.996.996 0 01-.315.609 1 1 0 01-.627.263h-.017L10.03 9H3v2a1 1 0 01-1 1z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#flag-tiny"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconFlagTiny, props);
});

module.exports = index;
