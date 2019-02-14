'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconGearSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M9 10a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2m0-4C7.346 6 6 7.346 6 9s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3m0 8c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5m8-6h-1.071a6.959 6.959 0 0 0-1.325-3.189l.76-.76a1 1 0 1 0-1.414-1.415l-.76.76A6.962 6.962 0 0 0 10 2.071V1a1 1 0 1 0-2 0v1.071a6.962 6.962 0 0 0-3.19 1.325l-.76-.76a1 1 0 0 0-1.414 1.415l.76.76A6.959 6.959 0 0 0 2.071 8H1a1 1 0 1 0 0 2h1.071a6.959 6.959 0 0 0 1.325 3.189l-.76.76a1 1 0 1 0 1.414 1.415l.76-.76A6.962 6.962 0 0 0 8 15.929V17a1 1 0 1 0 2 0v-1.071a6.962 6.962 0 0 0 3.19-1.325l.76.76a1 1 0 0 0 1.414-1.415l-.76-.76A6.959 6.959 0 0 0 15.929 10H17a1 1 0 1 0 0-2" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconGearSmall, props);
});

module.exports = index;
