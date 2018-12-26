'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsHouseSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M11.955 16.925h2c.6 0 1-.4 1-1v-7h1c.3 0 .6-.1.8-.3.4-.4.3-1-.1-1.4l-7-6c-.4-.3-.9-.3-1.3 0l-7 6c-.4.4-.5 1-.1 1.4.1.2.4.3.7.3h1v7c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h4v3c0 .6.4 1 1 1z", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsHouseSmall;
