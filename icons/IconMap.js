'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconMap = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "map-a",
  d: "M3 5.66v14.823l5-2.142V3.516L3 5.66zm7 12.681l5 2.142V5.66l-5-2.143v14.825zM17 5.66v14.824l5-2.142V3.516L17 5.66zM16 23a.994.994 0 01-.29-.043h-.001a1.687 1.687 0 01-.107-.039L9 20.088 2.394 22.92A1.002 1.002 0 011 22V5c0-.4.238-.762.606-.919l6.997-2.999c.029-.012.059-.024.088-.033h.004v-.002a.995.995 0 01.595-.004h.001a.979.979 0 01.107.04L16 3.912l6.606-2.832A.999.999 0 0124 2v17c0 .4-.238.762-.606.92l-6.997 2.998a1.573 1.573 0 01-.088.033l-.003.001h-.001v.001c-.1.031-.202.047-.305.047z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#map-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconMap, props);
});

module.exports = index;
