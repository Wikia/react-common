'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconPageSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M10 12v2.586L12.586 12H10zm-6 4h4v-5a1 1 0 0 1 1-1h5V2H4v14zm5 2H3a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9.992c0 .043-.002.086-.007.128l-.001.003v.006a1.19 1.19 0 0 1-.023.119l-.001.002-.001.006-.001.002v.001a1 1 0 0 1-.254.444s-.002 0-.002.002h-.001l-.002.002-6 6-.003.004-.003.002-.001.001a1.003 1.003 0 0 1-.435.251h-.004a.885.885 0 0 1-.136.027h-.004c-.001.001.005.004-.004.001l-.003.001A1.088 1.088 0 0 1 9 18z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconPageSmall, props);
});

module.exports = index;