'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsMenuSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 18 18" }, props),
    React.createElement("path", { fillRule: "evenodd", d: "M16 8a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h14zM2 5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H2zm14 8a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h14z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsMenuSmall;
