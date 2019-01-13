'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsEyeSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M9 6c1.705 0 3.009 1.3 3.009 3s-1.304 3-3.01 3c-1.704 0-3.008-1.3-3.008-3S7.295 6 9 6m0 9c3.61 0 6.42-3.1 7.624-4.9.5-.7.5-1.6 0-2.3C15.42 6.1 12.61 3 9 3 5.389 3 2.58 6.1 1.376 7.9c-.501.7-.501 1.6 0 2.2C2.58 11.9 5.389 15 9 15", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsEyeSmall;
