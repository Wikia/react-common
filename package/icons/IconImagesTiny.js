'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconImagesTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconImagesTiny-a", d: "M11 10a1 1 0 0 1-1-1V2H3a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zM3.414 5L7 8.586V5H3.414zM2 10h3.586L2 6.414V10zm6 2H1a1 1 0 0 1-1-1V3.997a.988.988 0 0 1 .293-.704A1.009 1.009 0 0 1 .997 3H8a1 1 0 0 1 1 1v7.003a.988.988 0 0 1-.293.704 1.009 1.009 0 0 1-.704.293H8z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconImagesTiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconImagesTiny, props);
});

module.exports = index;
