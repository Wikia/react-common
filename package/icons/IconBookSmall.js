'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconBookSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconBookSmall-a", d: "M13 1a5 5 0 0 1 5 5v10h-2c0-1.658-1.342-3-3-3-.801 0-1.558.32-2.118.872A3.024 3.024 0 0 0 10 16H8V6c0-1.335.532-2.594 1.468-3.542A5.023 5.023 0 0 1 13 1zm5 15c0 1.333-2 1.333-2 0v-4c1.215.911 2 2.364 2 4zM16 6c0-1.658-1.342-3-3-3-.801 0-1.558.32-2.118.872A3.024 3.024 0 0 0 10 6v6a5.005 5.005 0 0 1 6 0V6zm-6 10c0 1.333-2 1.333-2 0 0-1.335.532-2.594 1.468-3.542A5.14 5.14 0 0 1 10 12v4zM8 6c0-1.658-1.342-3-3-3-.801 0-1.558.32-2.118.872A3.024 3.024 0 0 0 2 6v6a5.005 5.005 0 0 1 6 0V6zm2 0v10c0 1.333-2 1.333-2 0 0-1.658-1.342-3-3-3-.801 0-1.558.32-2.118.872A3.024 3.024 0 0 0 2 16c0 1.333-2 1.333-2 0V6c0-1.335.532-2.594 1.468-3.542A5.023 5.023 0 0 1 5 1a5 5 0 0 1 5 5z" })
    ),
    React.createElement("use", { xlinkHref: "#id-source/icons/IconBookSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBookSmall, props);
});

module.exports = index;
