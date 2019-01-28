'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconClipboard = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconClipboard-a", d: "M7 3V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5zm0 2H3v16h18V5h-4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5zm3 10.586l6.293-6.293a1 1 0 0 1 1.414 1.414l-7 7a.997.997 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L10 15.586z" })
    ),
    React.createElement("use", { xlinkHref: "#id-icons/IconClipboard-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconClipboard, props);
});

module.exports = index;
