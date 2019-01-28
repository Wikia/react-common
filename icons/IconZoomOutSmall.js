'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconZoomOutSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "zoom-out-small", d: "M16 11a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1h3zM5 2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h2V3a1 1 0 0 1 1-1zm0 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-2H2a1 1 0 1 1 0-2h3zm8-4a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-3z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#zoom-out-small" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconZoomOutSmall, props);
});

module.exports = index;
