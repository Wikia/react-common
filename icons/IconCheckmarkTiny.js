'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconCheckmarkTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M4 10a.997.997 0 0 1-.707-.293l-3-3a.999.999 0 1 1 1.414-1.414L4 7.586l6.293-6.293a.999.999 0 1 1 1.414 1.414l-7 7A.997.997 0 0 1 4 10", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCheckmarkTiny, props);
});

module.exports = index;
