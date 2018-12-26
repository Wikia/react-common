'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsArrowSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement("path", { fillRule: "evenodd", d: "M16 7.994H4.419l3.29-3.287a1 1 0 1 0-1.415-1.414l-5 4.997a.998.998 0 0 0-.002 1.412l4.996 5.004a.997.997 0 0 0 1.414.002.998.998 0 0 0 .002-1.414l-3.295-3.3h11.59a1 1 0 1 0 0-2" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsArrowSmall;
