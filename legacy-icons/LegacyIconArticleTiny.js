'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsArticleTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 12 12" }, props),
    React.createElement("path", { fillRule: "evenodd", d: "M10.341 0H1.658A.659.659 0 0 0 1 .658v10.684c0 .363.295.658.658.658H7V8h4V.658A.659.659 0 0 0 10.341 0zM8 9h3l-3 3V9z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsArticleTiny;
