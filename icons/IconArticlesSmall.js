'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconArticlesSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "g",
      { fillRule: "evenodd" },
      React.createElement("path", { d: "M14.842 4.563v9.463c0 .654-.531 1.184-1.184 1.184H6.562c.36.477.927.79 1.57.79h5.526a1.975 1.975 0 0 0 1.974-1.974V6.131c0-.642-.313-1.208-.79-1.568" }),
      React.createElement("path", { d: "M12.079 14.421a1.975 1.975 0 0 0 1.974-1.974V4.158h-.04a1.947 1.947 0 0 0-.365-.79 1.97 1.97 0 0 0-.385-.384v1.174h-.072c.044.124.072.256.072.395v7.894c0 .653-.531 1.185-1.184 1.185H6.553a1.17 1.17 0 0 1-.395-.073v.073H4.984a2.024 2.024 0 0 0 1.174.749v.04h5.921z" }),
      React.createElement("path", { d: "M4.974 12.053a1.17 1.17 0 0 1-.395-.073 1.182 1.182 0 0 1-.79-1.112V2.973c0-.652.532-1.184 1.185-1.184H10.5c.514 0 .948.331 1.112.79.044.124.072.256.072.395v7.894c0 .653-.531 1.185-1.184 1.185H4.974zm.467.79H10.5a1.975 1.975 0 0 0 1.974-1.975V2.58h-.04a1.947 1.947 0 0 0-.365-.79A1.964 1.964 0 0 0 10.5 1H4.974A1.976 1.976 0 0 0 3 2.974v7.894c0 .643.313 1.21.79 1.57.23.174.495.305.789.364v.04h.861z" }),
      React.createElement("path", { d: "M6.158 8.105h4.737v-.79H4.578v.79h.79zm0-1.579h4.737v-.79H4.578v.79h.79zm0 3.158h4.737v-.79H4.578v.79h.79zm-.75-4.737h5.486V2.578H4.58v2.369h.79z" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconArticlesSmall, props);
});

module.exports = index;
