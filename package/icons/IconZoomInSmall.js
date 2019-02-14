'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconZoomInSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconZoomInSmall-a", d: "M16 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V4h-2a1 1 0 1 1 0-2h3zM5 2a1 1 0 1 1 0 2H3v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1h3zm0 12a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v2h2zm11-3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconZoomInSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconZoomInSmall, props);
});

module.exports = index;
