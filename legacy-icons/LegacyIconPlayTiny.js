'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsPlayTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 12 12" }, props),
    React.createElement("path", { fillRule: "evenodd", d: "M2.767.087l8.018 5.5a.498.498 0 0 1 0 .82L2.767 11.91A.49.49 0 0 1 2 11.5V.497a.49.49 0 0 1 .767-.41" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsPlayTiny;
