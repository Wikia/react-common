'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconUsersSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconUsersSmall-a", d: "M6 8c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2m0 2c-3.309 0-6 2.691-6 6a1 1 0 1 0 2 0c0-2.206 1.794-4 4-4s4 1.794 4 4a1 1 0 1 0 2 0c0-3.309-2.691-6-6-6m6-5c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2m0 2a1 1 0 1 0 0 2c2.206 0 4 1.794 4 4a1 1 0 1 0 2 0c0-3.309-2.691-6-6-6" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconUsersSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconUsersSmall, props);
});

module.exports = index;
