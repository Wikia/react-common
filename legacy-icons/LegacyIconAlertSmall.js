'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsAlertSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 18 16" }, props),
    React.createElement("path", { d: "M17.928 15.156c.1.178.096.392-.013.565a.603.603 0 0 1-.515.28H.6a.607.607 0 0 1-.515-.28.544.544 0 0 1-.013-.564L8.472.278c.21-.37.847-.37 1.056 0l8.4 14.878zM8 5.99v4.02A1 1 0 0 0 9 11c.556 0 1-.444 1-.99V5.99A1 1 0 0 0 9 5c-.556 0-1 .444-1 .99zM8 13c0 .556.448 1 1 1 .556 0 1-.448 1-1 0-.556-.448-1-1-1-.556 0-1 .448-1 1z", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsAlertSmall;
