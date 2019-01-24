'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconError = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props),
    React.createElement("path", { fillRule: "evenodd", d: "M14.15 12l2.556-2.555a1 1 0 0 0 .007-1.414l-.74-.74a1.002 1.002 0 0 0-1.416.006L12 9.852 9.446 7.296A1 1 0 0 0 8.03 7.29l-.74.74a1.002 1.002 0 0 0 .006 1.415L9.852 12l-2.556 2.556a1 1 0 0 0-.007 1.415l.74.742a1.002 1.002 0 0 0 1.415-.007L12 14.15l2.556 2.556a1 1 0 0 0 1.415.007l.742-.74a1.002 1.002 0 0 0-.007-1.416L14.15 12zm2.406-11L23 7.444v9.112L16.556 23H7.444L1 16.556V7.444L7.444 1h9.112z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconError, props);
});

module.exports = index;
