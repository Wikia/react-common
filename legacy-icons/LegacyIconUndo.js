'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsUndo = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24" }, props),
    React.createElement("path", { d: "M4.414 15H16a5 5 0 1 0 0-10H2a1 1 0 0 1 0-2h14a7 7 0 1 1 0 14H4.414l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a.997.997 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L4.414 15z", fillRule: "evenodd", fillOpacity: "100" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsUndo;
