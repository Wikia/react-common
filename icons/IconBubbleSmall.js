'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconBubbleSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "bubble-small", d: "M15 10c0 .551-.449 1-1 1H9a.997.997 0 0 0-.707.293L6 13.586V12a1 1 0 0 0-1-1H4c-.551 0-1-.449-1-1V4c0-.551.449-1 1-1h10c.551 0 1 .449 1 1v6zm-1-9H4C2.346 1 1 2.346 1 4v6c0 1.654 1.346 3 3 3v3a1 1 0 0 0 1.707.707L9.414 13H14c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3zm-2 5H6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#bubble-small" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBubbleSmall, props);
});

module.exports = index;
