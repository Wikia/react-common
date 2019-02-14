'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconTrashOpen = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconTrashOpen-a", d: "M20 8a1 1 0 0 0-1 1v12H5V10.763l15.406-6.847a1 1 0 0 0-.812-1.828l-15.95 7.09a.587.587 0 0 0-.097.043l-1.953.867a1 1 0 0 0 .812 1.828L3 11.65V22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M4.001 6a.987.987 0 0 0 .405-.086l9-4a1 1 0 0 0-.812-1.828l-9 4A1 1 0 0 0 4.001 6m11 5v6a1 1 0 1 0 2 0v-6a1 1 0 1 0-2 0m-4 1v5a1 1 0 1 0 2 0v-5a1 1 0 1 0-2 0m-4 1v4a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconTrashOpen-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconTrashOpen, props);
});

module.exports = index;
