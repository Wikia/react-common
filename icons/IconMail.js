'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconMail = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M23 2H1a1 1 0 0 0-1 1v3a1 1 0 0 0 .521.878l11 6a1.003 1.003 0 0 0 .958 0l11-6A1 1 0 0 0 24 6V3a1 1 0 0 0-1-1zM12 15c-.498 0-.994-.126-1.433-.364L0 8.872V21a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V8.872l-10.563 5.762c-.443.24-.939.366-1.437.366z", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconMail, props);
});

module.exports = index;
