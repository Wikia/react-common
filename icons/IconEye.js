'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconEye = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconEye-a", d: "M15 11.78c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3 3 1.35 3 3m-3 6.781c-4.4 0-8.35-2.71-9.93-6.78C3.65 7.71 7.6 5 12 5c4.4 0 8.35 2.71 9.93 6.781-1.58 4.07-5.53 6.78-9.93 6.78m11.94-7.11A12.67 12.67 0 0 0 12 3 12.67 12.67 0 0 0 .06 11.451c-.08.21-.08.45 0 .66A12.67 12.67 0 0 0 12 20.561a12.67 12.67 0 0 0 11.94-8.45c.08-.21.08-.45 0-.66" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconEye-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconEye, props);
});

module.exports = index;
