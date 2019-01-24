'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconHelp = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement(
      "g",
      { fillRule: "evenodd" },
      React.createElement("path", { d: "M6.507 2.193L5.093 3.607l4.4 4.4 1.414-1.414zm.086 8.714l1.414-1.414-4.4-4.4-1.414 1.414zm15.214-4.4l-1.414-1.414-4.4 4.4 1.414 1.414zm-8.714.086l1.414 1.414 4.4-4.4-1.414-1.414zm4.4 15.214l1.414-1.414-4.4-4.4-1.414 1.414zm-.086-8.714l-1.414 1.414 4.4 4.4 1.414-1.414zm-15.214 4.4l1.414 1.414 4.4-4.4-1.414-1.414zm8.714-.086l-1.414-1.414-4.4 4.4 1.414 1.414z" }),
      React.createElement("path", { d: "M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z" }),
      React.createElement("path", { d: "M18 12a6 6 0 1 0-12 0 6 6 0 0 0 12 0zM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconHelp, props);
});

module.exports = index;
