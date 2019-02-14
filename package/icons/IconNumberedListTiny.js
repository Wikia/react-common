'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconNumberedListTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconNumberedListTiny-a", d: "M7 3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2H7zm3 2a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h3zm0 4a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h3zM1.854 2.855a.5.5 0 0 1-.708-.707l1-1A.5.5 0 1 1 3 1.5v3a.499.499 0 1 1-1 0V2.708l-.146.146zM4 8.501c0 .133-.053.26-.146.354L2.707 10H3.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.354-.854l1.823-1.821A.5.5 0 0 0 2 8.5a.5.5 0 0 1-1 0C1 7.674 1.673 7 2.5 7S4 7.674 4 8.5z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconNumberedListTiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconNumberedListTiny, props);
});

module.exports = index;
