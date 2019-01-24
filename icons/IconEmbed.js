'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconEmbed = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props),
    React.createElement("path", { d: "M6.792 8.793L3.535 12.05l3.257 3.258a1.05 1.05 0 0 1-1.484 1.485l-4-4a1.05 1.05 0 0 1 0-1.485l4-4a1.049 1.049 0 1 1 1.484 1.485zm10.516 6.515l3.257-3.258-3.257-3.257a1.05 1.05 0 0 1 1.484-1.485l4 4c.41.41.41 1.075 0 1.485l-4 4a1.049 1.049 0 1 1-1.484-1.485zm-6.24 4.997a1.05 1.05 0 1 1-2.037-.512l4-16a1.05 1.05 0 1 1 2.041.51l-4 16z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconEmbed, props);
});

module.exports = index;
