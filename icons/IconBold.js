'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconBold = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M3 23v-2.37l1.3-.41a1 1 0 0 0 .7-.954V4.756a1 1 0 0 0-.726-.963L3 3.431V1h10.11c5.196 0 6.654 2.37 6.654 5.378 0 2.887-1.853 4.498-3.706 5.105v.09C19.522 11.97 21 13.963 21 17c0 4.497-3.393 6-8.164 6H3zm8.165-12.762c2.187 0 4.132-.517 4.132-3.1 0-2.492-1.58-2.826-3.677-2.826H10v5.926h1.165zm.88 9.48c2.553 0 4.224-.608 4.224-3.251 0-2.523-1.7-3.19-3.767-3.19H10v6.44h2.046z", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBold, props);
});

module.exports = index;
