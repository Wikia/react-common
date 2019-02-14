'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconGridTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M8 3.99h3V.997H8V3.99zm-1 .498V.498A.5.5 0 0 1 7.5 0h4a.5.5 0 0 1 .5.499v3.99a.5.5 0 0 1-.5.498h-4a.5.5 0 0 1-.5-.499zm-6 6.515h3V8.01H1v2.993zM0 11.5V7.51a.5.5 0 0 1 .5-.498h4a.5.5 0 0 1 .5.499v3.99a.5.5 0 0 1-.5.498h-4A.5.5 0 0 1 0 11.5zm8-.498h3V8.01H8v2.993zM7 11.5V7.51a.5.5 0 0 1 .5-.498h4a.5.5 0 0 1 .5.499v3.99a.5.5 0 0 1-.5.498h-4A.5.5 0 0 1 7 11.5zM1 3.99h3V.997H1V3.99zm-1 .498V.498A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 .5.499v3.99a.5.5 0 0 1-.5.498h-4a.5.5 0 0 1-.5-.499z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconGridTiny, props);
});

module.exports = index;
