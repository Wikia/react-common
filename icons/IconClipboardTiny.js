'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconClipboardTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconClipboardTiny-a", d: "M5 8.5a.498.498 0 0 1-.354-.146l-1-1a.5.5 0 1 1 .708-.708L5 7.293l2.646-2.647a.5.5 0 1 1 .708.708l-3 3A.498.498 0 0 1 5 8.5zM3.75 1a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1H11a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2.75zM2 10h8V3H2v7z" })
    ),
    React.createElement("use", { xlinkHref: "#id-icons/IconClipboardTiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconClipboardTiny, props);
});

module.exports = index;
