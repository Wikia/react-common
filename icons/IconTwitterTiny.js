'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconTwitterTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "twitter-tiny", d: "M10.737 4.213v.295C10.737 7.533 8.289 11 3.789 11A7.24 7.24 0 0 1 0 9.967c.237 0 .395.074.632.074a5.59 5.59 0 0 0 3.079-.959c-1.027 0-1.974-.664-2.29-1.623.158 0 .316.074.474.074.237 0 .237 0 .552-.074-1.184-.221-2.21-1.18-2.21-2.287 0 .221.868.221 1.263.295C.868 5.025.474 4.361.474 3.55c0-.442.158-.811.394-1.18 1.185 1.401 3.08 2.287 5.053 2.434-.079-.221-.079-.369-.079-.516C5.842 3.033 6.947 2 8.29 2c.711 0 1.343.221 1.816.738.553-.148 1.027-.295 1.5-.59-.237.59-.631.959-1.026 1.254a7.885 7.885 0 0 0 1.42-.37c-.395.443-.79.886-1.263 1.181z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#twitter-tiny" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconTwitterTiny, props);
});

module.exports = index;
