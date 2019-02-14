'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconAlert = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconAlert-a", d: "M11 9.956v4a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0m-8.382 12L12 3.192l9.382 18.764H2.618zm21.276.553l-11-22c-.339-.678-1.449-.678-1.789 0l-11 22A.999.999 0 0 0 1 23.956h22a.998.998 0 0 0 .894-1.447zm-11.888-5.563A1.01 1.01 0 0 0 11 17.95a1.01 1.01 0 0 0 1.006 1.005c.553 0 1.005-.453 1.005-1.005 0-.552-.452-1.005-1.005-1.005" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconAlert-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconAlert, props);
});

module.exports = index;
