'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconCommunity = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M9.004 5.489a2.495 2.495 0 0 1-2.503 2.489A2.495 2.495 0 0 1 4 5.488 2.495 2.495 0 0 1 6.501 3a2.496 2.496 0 0 1 2.503 2.489zm10.951 0a2.495 2.495 0 0 1-2.502 2.489 2.495 2.495 0 0 1-2.501-2.49A2.495 2.495 0 0 1 17.452 3a2.496 2.496 0 0 1 2.503 2.489zM9.992 9.016H4.049V21h5.943v-1.955H7.986v-8.046h2.006V9.016zm4.06 0H20V21h-5.948v-1.955h1.977v-8.046h-1.977V9.016z", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCommunity, props);
});

module.exports = index;
