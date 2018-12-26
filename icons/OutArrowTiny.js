'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsOutArrowTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12 12" }, props),
    React.createElement("path", { d: "M9.75 6.75A.75.75 0 0 0 9 7.5v3H1.5V3h3a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V7.5a.75.75 0 0 0-.75-.75" }),
    React.createElement("path", { d: "M11.5 0H8a.5.5 0 0 0-.354.854l1.22 1.219-3.771 3.772a.749.749 0 1 0 1.06 1.06l3.772-3.771 1.219 1.22a.504.504 0 0 0 .545.108A.5.5 0 0 0 12 4V.5a.5.5 0 0 0-.5-.5" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsOutArrowTiny;
