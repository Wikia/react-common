'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconTrash = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconTrash-a", d: "M16 19a1 1 0 0 0 1-1v-7a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1m-4 0a1 1 0 0 0 1-1v-7a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1m-4 0a1 1 0 0 0 1-1v-7a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1M7 2h10a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2M5 22h14V7H5v15zM22 5H2a1 1 0 1 0 0 2h1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7h1a1 1 0 1 0 0-2z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconTrash-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconTrash, props);
});

module.exports = index;
