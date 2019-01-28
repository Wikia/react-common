'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconBubbleTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "bubble-tiny", d: "M3 2c-.551 0-1 .449-1 1v3c0 .551.449 1 1 1a1 1 0 0 1 1 1v.586l1.293-1.293A.997.997 0 0 1 6 7h3c.551 0 1-.449 1-1V3c0-.551-.449-1-1-1H3zm0 10a1.002 1.002 0 0 1-1-1V8.829A3.006 3.006 0 0 1 0 6V3c0-1.654 1.346-3 3-3h6c1.654 0 3 1.346 3 3v3c0 1.654-1.346 3-3 3H6.414l-2.707 2.707A1 1 0 0 1 3 12z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#bubble-tiny" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBubbleTiny, props);
});

module.exports = index;
