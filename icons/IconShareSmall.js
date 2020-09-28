'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconShareSmall = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "share-small",
  d: "M14.5 15a1.502 1.502 0 01-1.406-2.022l.022-.05.017-.045c.236-.52.76-.883 1.367-.883.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5M4.906 9.522l-.022.05-.017.045c-.236.52-.76.883-1.367.883C2.673 10.5 2 9.827 2 9s.673-1.5 1.5-1.5c.607 0 1.131.363 1.367.883l.017.045.022.05a1.482 1.482 0 010 1.044M14.5 3c.827 0 1.5.673 1.5 1.5S15.327 6 14.5 6a1.503 1.503 0 01-1.367-.883l-.017-.045-.022-.05A1.502 1.502 0 0114.5 3m0 7c-1.098 0-2.08.508-2.722 1.303L6.983 9.348a3.653 3.653 0 000-.696l4.795-1.955A3.492 3.492 0 0014.5 8C16.43 8 18 6.43 18 4.5S16.43 1 14.5 1a3.504 3.504 0 00-3.483 3.848L6.222 6.803A3.492 3.492 0 003.5 5.5C1.57 5.5 0 7.07 0 9s1.57 3.5 3.5 3.5c1.098 0 2.08-.508 2.722-1.303l4.795 1.955A3.504 3.504 0 0014.5 17c1.93 0 3.5-1.57 3.5-3.5S16.43 10 14.5 10"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#share-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconShareSmall, props);
});

module.exports = index;
