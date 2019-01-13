'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsFlagSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement("path", { d: "M8.1 16.5l-7-13C.9 3 1 2.4 1.5 2.1c.5-.2 1.1-.1 1.4.4l7 13c.2.5.1 1.1-.4 1.4-.5.2-1.1.1-1.4-.4zM17 6.7c-2.8 2.5-6.2-.6-8.3 3.1L5.5 4.1C7.6.4 11 3.5 13.7 1L17 6.7z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsFlagSmall;
