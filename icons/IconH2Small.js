'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconH2Small = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "h2-small", d: "M7 16a1 1 0 0 1-1-1v-5H2v5a1 1 0 1 1-2 0V3a1 1 0 1 1 2 0v5h4V3a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1m10 0h-6a1 1 0 0 1-1-1v-3c0-2.205 1.794-4 4-4 1.103 0 2-.896 2-2s-.897-2-2-2-2 .896-2 2a1 1 0 1 1-2 0c0-2.205 1.794-4 4-4s4 1.795 4 4-1.794 4-4 4c-1.103 0-2 .896-2 2v2h5a1 1 0 1 1 0 2" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#h2-small" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconH2Small, props);
});

module.exports = index;
