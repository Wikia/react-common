import React from 'react';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var IconDropdown = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), React.createElement("defs", null, React.createElement("path", {
  id: "dropdown-a",
  d: "M12 17c-.41 0-.82-.147-1.131-.44l-6.4-6a1.432 1.432 0 01-.347-1.635C4.368 8.365 4.954 8 5.6 8h12.8c.646 0 1.23.364 1.478.925s.11 1.207-.347 1.635l-6.4 6c-.312.293-.721.44-1.131.44z"
})), React.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#dropdown-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconDropdown, props);
});

export default index;
