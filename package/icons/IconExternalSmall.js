'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconExternalSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement("path", { d: "M16.925 1.619a.988.988 0 0 1 .075.378V7a1 1 0 1 1-2 0V4.414l-6.293 6.293a.997.997 0 0 1-1.414 0 1 1 0 0 1 0-1.414L13.586 3H11a1 1 0 1 1 0-2h5.003a.988.988 0 0 1 .704.293.998.998 0 0 1 .218.326zM13 9.999a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H3v9h9v-4a1 1 0 0 1 1-1z" }),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "id-source/icons/IconExternalSmall-a", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#path-1-small" })
      ),
      React.createElement("use", { fill: "#999", xlinkHref: "#path-1-small" }),
      React.createElement(
        "g",
        { mask: "url(#id-source/icons/IconExternalSmall-a)", fill: "#000" },
        React.createElement("path", { d: "M0 0h18v18H0z" })
      )
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconExternalSmall, props);
});

module.exports = index;
