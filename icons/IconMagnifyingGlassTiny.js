'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconMagnifyingGlassTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M8 7.947a.331.331 0 0 0-.027.026l-.027.028A3.486 3.486 0 0 1 5.5 9C3.57 9 2 7.43 2 5.5 2 3.571 3.57 2 5.5 2 7.429 2 9 3.571 9 5.5a3.49 3.49 0 0 1-1 2.447m3.707 2.346L10.03 8.616c.611-.886.97-1.96.97-3.116C11 2.468 8.532 0 5.5 0A5.506 5.506 0 0 0 0 5.5C0 8.533 2.467 11 5.5 11a5.464 5.464 0 0 0 3.115-.97l1.677 1.677a.997.997 0 0 0 1.415 0 1 1 0 0 0 0-1.414", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconMagnifyingGlassTiny, props);
});

module.exports = index;
