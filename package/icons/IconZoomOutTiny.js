'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconZoomOutTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconZoomOutTiny-a", d: "M8 5a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2H8zM4 7a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V9H2a1 1 0 1 1 0-2h2zm0-6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1V2a1 1 0 0 1 1-1zm6 6a1 1 0 1 1 0 2H9v1a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1h2z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconZoomOutTiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconZoomOutTiny, props);
});

module.exports = index;
