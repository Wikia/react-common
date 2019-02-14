'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconCheckmarkSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M6 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 1 1 1.414-1.414L6 13.586 16.293 3.293a.999.999 0 1 1 1.414 1.414l-11 11A.997.997 0 0 1 6 16", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCheckmarkSmall, props);
});

module.exports = index;
