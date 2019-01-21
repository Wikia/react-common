'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsCheckmarkCircleSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 18 18" }, props),
    React.createElement("path", { fillRule: "evenodd", d: "M9 17A8 8 0 1 1 9 1a8 8 0 0 1 0 16zm-1.083-5a.73.73 0 0 0 .52-.22l4.33-4.403c.3-.305.312-.81.024-1.13a.722.722 0 0 0-1.062-.026l-3.83 3.895L6.25 8.563a.72.72 0 0 0-1.06.068.835.835 0 0 0 .063 1.13l2.165 2.04a.725.725 0 0 0 .5.2z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsCheckmarkCircleSmall;
