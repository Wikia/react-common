'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconActivity = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M14.218 22l-.097-.003a1.498 1.498 0 0 1-1.351-1.117L9.486 8.289l-1.799 4.517c-.226.57-.778.943-1.389.943H2.496A1.497 1.497 0 0 1 1 12.25c0-.827.67-1.498 1.496-1.498h2.788l3.11-7.808a1.49 1.49 0 0 1 1.482-.94c.644.04 1.19.49 1.354 1.116l3.292 12.622 1.635-4.052a1.495 1.495 0 0 1 1.386-.938h3.96a1.498 1.498 0 0 1 0 2.997h-2.95l-2.949 7.314c-.229.57-.78.937-1.386.937" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconActivity, props);
});

module.exports = index;
