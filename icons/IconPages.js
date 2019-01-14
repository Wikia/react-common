'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsPages = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement(
      "g",
      { fillRule: "evenodd" },
      React.createElement("path", { d: "M4 21.053h13v-15H4v15zm14-17H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-17a1 1 0 0 0-1-1z" }),
      React.createElement("path", { d: "M21 1H5.505a1 1 0 1 0 0 2H20v17.229a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1" }),
      React.createElement("path", { d: "M7 10.042h7a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2m0 4.011h6a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2m0 4h3a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsPages;
