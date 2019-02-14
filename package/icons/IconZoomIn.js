'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconZoomIn = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconZoomIn-a", d: "M22 2h-5a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1M7 20H3v-4a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2M7 2H2a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0V4h4a1 1 0 1 0 0-2m15 13a1 1 0 0 0-1 1v4h-4a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconZoomIn-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconZoomIn, props);
});

module.exports = index;
