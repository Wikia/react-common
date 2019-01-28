'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconPencil = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "pencil-a", d: "M2 15.164l8.625-8.625 6.836 6.836L8.836 22H2v-6.836zm16.875-3.203l-6.836-6.836 2.711-2.71 6.836 6.835-2.711 2.711zm4.832-3.418l-8.25-8.25a.999.999 0 0 0-1.414 0L.294 14.043A1 1 0 0 0 0 14.75V23a1 1 0 0 0 1 1h8.25a1 1 0 0 0 .708-.294L23.707 9.957a.999.999 0 0 0 0-1.414z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#pencil-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconPencil, props);
});

module.exports = index;
