'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconFootnoteSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconFootnoteSmall-a", d: "M8.005 10a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-1v7h1zM6.5 14.005c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.005 9V6a.999.999 0 0 1-.707-1.707l.999-.999.015-.015.002-.001A1.005 1.005 0 0 1 11.003 3h.008a1 1 0 0 1 .994.994V9a1 1 0 0 1-2 0zm6-8a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h1V3h-1a1 1 0 0 1 0-2h2zM1.5 14.005c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm10.01 0c.83 0 1.51.67 1.51 1.5s-.68 1.5-1.51 1.5-1.51-.67-1.51-1.5.68-1.5 1.51-1.5z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconFootnoteSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconFootnoteSmall, props);
});

module.exports = index;
