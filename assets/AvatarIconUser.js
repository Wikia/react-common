'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsAvatarIconUser = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "6 6 138 138" }, props),
    React.createElement("path", { d: "M75 76.667c11.03 0 20-8.97 20-20V50c0-11.03-8.97-20-20-20s-20 8.97-20 20v6.667c0 11.03 8.97 20 20 20zm-16.667 6.666C45.467 83.333 35 93.8 35 106.667c0 1.84-.874 23.546.966 23.546 0 0 22.608 12.983 35.606 13.978 12.998.995 42.383-8.007 42.383-8.007 1.84 0 1.045-27.677 1.045-29.517 0-12.867-10.467-23.334-23.333-23.334H58.333z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsAvatarIconUser;
