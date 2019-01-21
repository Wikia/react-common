'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsClockTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 12 12" }, props),
    React.createElement("path", { fillRule: "evenodd", d: "M9 6a1 1 0 0 0-1-1H7V4a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M6 2C3.794 2 2 3.794 2 6s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4M0 6c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsClockTiny;
