'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconMagnifyingGlassSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M11.563 11.504l-.03.029-.03.031A4.984 4.984 0 0 1 8 13c-2.757 0-5-2.243-5-5s2.243-5 5-5c2.756 0 5 2.243 5 5a4.983 4.983 0 0 1-1.437 3.504m5.144 3.789l-3.103-3.103A6.963 6.963 0 0 0 15 8c0-3.859-3.141-7-7-7-3.86 0-7 3.141-7 7s3.14 7 7 7a6.956 6.956 0 0 0 4.189-1.396l3.103 3.103a1.001 1.001 0 0 0 1.415-1.414", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconMagnifyingGlassSmall, props);
});

module.exports = index;
