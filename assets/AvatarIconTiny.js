'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsAvatarIconTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ width: "12", height: "12" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("circle", { fill: "#FFF", cx: "6", cy: "6", r: "6" }),
      React.createElement("path", { d: "M6 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM5 7h2a2 2 0 0 1 2 2v.757a2 2 0 0 1-2.208 1.99 11.11 11.11 0 0 0-.79-.068c-.102 0-.366.023-.794.067A2 2 0 0 1 3 9.757V9a2 2 0 0 1 2-2z", fill: "#999" }),
      React.createElement("circle", { stroke: "#999", cx: "6", cy: "6", r: "5.5" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsAvatarIconTiny;
