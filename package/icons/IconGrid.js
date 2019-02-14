'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconGrid = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M2 22h6.25v-6.25H2V22zm7.25 2H1a1 1 0 0 1-1-1v-8.25a1 1 0 0 1 1-1h8.25a1 1 0 0 1 1 1V23a1 1 0 0 1-1 1zm6.5-2H22v-6.25h-6.25V22zM23 24h-8.25a1 1 0 0 1-1-1v-8.25a1 1 0 0 1 1-1H23a1 1 0 0 1 1 1V23a1 1 0 0 1-1 1zM15.75 8.25H22V2h-6.25v6.25zm7.25 2h-8.25a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1H23a1 1 0 0 1 1 1v8.25a1 1 0 0 1-1 1zm-21-2h6.25V2H2v6.25zm7.25 2H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h8.25a1 1 0 0 1 1 1v8.25a1 1 0 0 1-1 1z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconGrid, props);
});

module.exports = index;
