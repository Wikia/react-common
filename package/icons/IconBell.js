'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconBell = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconBell-a", d: "M15 19a1 1 0 0 0-1 1c0 1.104-.897 2-2 2s-2-.896-2-2a1 1 0 1 0-2 0c0 2.205 1.794 4 4 4s4-1.795 4-4a1 1 0 0 0-1-1m-8.675-5l2.708-9.477A3.496 3.496 0 0 1 12.38 2c1.63 0 3.06 1.156 3.402 2.75L17.763 14H6.325zm11.411-9.668A5.507 5.507 0 0 0 12.38 0a5.505 5.505 0 0 0-5.27 3.975l-3.07 10.75A1 1 0 0 0 5 16h14a1 1 0 0 0 .977-1.209l-2.24-10.459z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconBell-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBell, props);
});

module.exports = index;
