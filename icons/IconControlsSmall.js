'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconControlsSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "controls-small", d: "M12 4h4a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2M2 4h5a1 1 0 1 0 2 0V2a1 1 0 1 0-2 0H2a1 1 0 1 0 0 2m14 10h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2m0-7a1 1 0 0 0-1 1H2a1 1 0 1 0 0 2h13a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m-8 6a1 1 0 0 0-1 1H2a1 1 0 1 0 0 2h5a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#controls-small" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconControlsSmall, props);
});

module.exports = index;
