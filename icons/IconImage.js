'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsImage = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "g",
      { fillRule: "evenodd" },
      React.createElement("path", { d: "M3 4h18v8.737l-3.83-3.191a.916.916 0 0 0-1.282.108l-4.924 5.744-3.891-3.114a.92.92 0 0 0-1.146 0L3 14.626V4zm19-2H2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" }),
      React.createElement("path", { d: "M9 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsImage;
