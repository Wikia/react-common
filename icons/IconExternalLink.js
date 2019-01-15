'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsExternalLink = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 11 11" }, props),
    React.createElement("path", { fillRule: "evenodd", d: "M5 7a.999.999 0 0 1-.707-1.707L7.586 2H6a1 1 0 1 1 0-2h4.003a.988.988 0 0 1 .704.293.993.993 0 0 1 .293.704V5a1 1 0 1 1-2 0V3.414L5.707 6.707A.997.997 0 0 1 5 7m3 4H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H2v5h5V8a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsExternalLink;
