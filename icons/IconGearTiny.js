'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconGearTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M6 8c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2m5-3H9.873a3.967 3.967 0 0 0-.428-1.031l.797-.798a.999.999 0 1 0-1.414-1.414l-.798.798A3.983 3.983 0 0 0 7 2.126V1a1 1 0 1 0-2 0v1.126c-.366.096-.713.24-1.03.429l-.798-.798a.999.999 0 1 0-1.414 1.414l.797.798A3.967 3.967 0 0 0 2.127 5H1a1 1 0 1 0 0 2h1.127c.095.366.239.713.428 1.031l-.797.798a.999.999 0 1 0 1.414 1.414l.798-.798c.317.189.664.333 1.03.429V11a1 1 0 1 0 2 0V9.874c.366-.096.713-.24 1.03-.429l.798.798a.999.999 0 1 0 1.414-1.414l-.797-.798c.189-.318.333-.665.428-1.031H11a1 1 0 1 0 0-2", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconGearTiny, props);
});

module.exports = index;
