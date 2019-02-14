'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconH3Tiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconH3Tiny-a", d: "M5 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7H2v4a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v4h2V1a1 1 0 0 1 1-1zm6.964 1.177c-.012.065-.01.131-.036.195L10.476 5H11a1 1 0 0 1 1 1v2c0 2.206-1.794 4-4 4a1 1 0 1 1 0-2c1.102 0 2-.897 2-2V7H9a1.001 1.001 0 0 1-.929-1.372L9.522 2H8a1 1 0 1 1 0-2h3c.068 0 .127.026.191.038.06.012.121.01.18.034l.008.004a.97.97 0 0 1 .257.169c.021.018.05.028.07.046.056.058.092.131.134.2.025.04.061.074.08.117.012.031.01.067.021.099.028.093.056.186.057.284L12 1c0 .063-.025.117-.036.177z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconH3Tiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconH3Tiny, props);
});

module.exports = index;
