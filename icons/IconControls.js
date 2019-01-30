'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconControls = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconControls-a", d: "M2 5h8v1a1 1 0 1 0 2 0V2a1 1 0 1 0-2 0v1H2a1 1 0 1 0 0 2m14 0h6a1 1 0 1 0 0-2h-6a1 1 0 1 0 0 2m6 4a1 1 0 0 0-1 1v1H2a1 1 0 1 0 0 2h19v1a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m-11 8a1 1 0 0 0-1 1v1H2a1 1 0 1 0 0 2h8v1a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m11 2h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconControls-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconControls, props);
});

module.exports = index;
