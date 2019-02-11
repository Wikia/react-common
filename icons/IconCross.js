'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconCross = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconCross-a", d: "M22.083 23a.914.914 0 0 1-.648-.269l-9.485-9.485-9.385 9.385a.917.917 0 0 1-1.296-1.297l9.384-9.384L1.37 2.666a.917.917 0 0 1 1.297-1.297l9.284 9.283 9.384-9.383a.916.916 0 1 1 1.297 1.296l-9.385 9.385 9.485 9.485A.916.916 0 0 1 22.083 23" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconCross-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCross, props);
});

module.exports = index;
