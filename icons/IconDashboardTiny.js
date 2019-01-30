'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconDashboardTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12 12" }, props),
    React.createElement("path", { fillRule: "evenodd", d: "M6 10c-1.479 0-2.758-.816-3.451-2.013h4.89c.021.003.04.013.061.013.024 0 .047-.01.071-.013h1.88C8.758 9.184 7.479 10 6 10m0-8c2.206 0 4 1.794 4 4 0 .352-.06.687-.146 1.013H7.736L5 3.919a.497.497 0 0 0-.706-.043.499.499 0 0 0-.044.705l2.151 2.432H2.146A3.947 3.947 0 0 1 2 6c0-2.206 1.794-4 4-4m0-2C2.691 0 0 2.691 0 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconDashboardTiny, props);
});

module.exports = index;
