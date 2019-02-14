'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconPage = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M13 16v4.586L17.586 16H13zm-8 6h6v-7a1 1 0 0 1 1-1h7V2H5v20zm7 2H4a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v13.992c0 .043-.002.086-.007.128.001.001-.001.001-.001.001v.008a1.19 1.19 0 0 1-.023.119l-.001.002-.001.006-.001.002v.001a1 1 0 0 1-.254.444l-.002.002h-.001l-.002.002-8 8a.007.007 0 0 1-.003.003l-.003.003H12.7a.995.995 0 0 1-.435.252h-.004a.885.885 0 0 1-.136.027h-.004c-.001 0 .006.002-.004.001l-.003.001A1.088 1.088 0 0 1 12 24z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconPage, props);
});

module.exports = index;
