'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconH3 = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconH3-a", d: "M9 2a1 1 0 0 0-1 1v8H2V3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0v-8h6v8a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1m10.095 6.32l4.612-4.613A1 1 0 0 0 23 2h-8a1 1 0 1 0 0 2h5.586l-4.293 4.293a.988.988 0 0 0-.293.704v.006a.998.998 0 0 0 .997.997H17c2.757 0 5 2.243 5 5s-2.243 5-5 5a4.842 4.842 0 0 1-1.657-.289 1 1 0 1 0-.685 1.88A6.84 6.84 0 0 0 17 22c3.86 0 7-3.142 7-7a7.01 7.01 0 0 0-4.905-6.68" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconH3-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconH3, props);
});

module.exports = index;
