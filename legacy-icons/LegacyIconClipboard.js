'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsClipboard = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24" }, props),
    React.createElement(
      "g",
      { fillRule: "evenodd" },
      React.createElement("path", { d: "M14.382 10.264l-3.42 3.388-1.37-1.257a.937.937 0 0 0-1.352.085 1.017 1.017 0 0 0 .082 1.399l2.03 1.86a.937.937 0 0 0 1.295-.025l4.058-4.018a1.017 1.017 0 0 0 .03-1.401.934.934 0 0 0-1.353-.031" }),
      React.createElement("path", { d: "M19 20H5V4h3v2.497c0 .278.225.503.503.503H10a2 2 0 1 1 4 0h1.497A.503.503 0 0 0 16 6.497V4h3v16zm1.5-19h-17A1.5 1.5 0 0 0 2 2.5v19A1.5 1.5 0 0 0 3.5 23h17a1.5 1.5 0 0 0 1.5-1.5v-19A1.5 1.5 0 0 0 20.5 1z" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsClipboard;
