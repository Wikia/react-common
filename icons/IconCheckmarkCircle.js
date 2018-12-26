'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsCheckmarkCircle = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props),
    React.createElement("path", { fillRule: "evenodd", d: "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm-1.12-7.247a1 1 0 0 0 .69-.277l5.76-5.506a1 1 0 0 0-1.384-1.446l-5.092 4.87-2.19-1.94a1 1 0 1 0-1.327 1.496l2.88 2.55a.998.998 0 0 0 .662.253z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsCheckmarkCircle;
