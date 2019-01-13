'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsGridTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12 12" }, props),
    React.createElement("rect", { width: "5", height: "5", rx: "1" }),
    React.createElement("rect", { width: "5", height: "5", x: "7", rx: "1" }),
    React.createElement("rect", { width: "5", height: "5", y: "7", rx: "1" }),
    React.createElement("rect", { width: "5", height: "5", x: "7", y: "7", rx: "1" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsGridTiny;
