'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconVideoCamera = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M23.6 6.2c-.3-.2-.6-.2-.9-.1L17 8.5V5c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h15c.6 0 1-.4 1-1v-3.5l5.6 2.4c.1.1.3.1.4.1.2 0 .4-.1.6-.2.3-.2.4-.5.4-.8V7c0-.3-.2-.6-.4-.8z", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconVideoCamera, props);
});

module.exports = index;
