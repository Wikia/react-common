'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconBellSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "bell-small", d: "M5.22 10l1.173-5.862A2.665 2.665 0 0 1 9 2c1.264 0 2.36.898 2.608 2.138v.001L12.78 10H5.22zm8.349-6.254A4.672 4.672 0 0 0 8.999 0a4.67 4.67 0 0 0-4.567 3.746L3.02 10.804A.999.999 0 0 0 4 12h10c.3 0 .583-.135.774-.366.189-.232.265-.536.207-.83l-1.412-7.058zM10.999 14a1 1 0 0 0-1 1 1.001 1.001 0 0 1-2 0 1 1 0 1 0-2 0c0 1.654 1.347 3 3 3 1.655 0 3-1.346 3-3a1 1 0 0 0-1-1" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#bell-small" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBellSmall, props);
});

module.exports = index;
