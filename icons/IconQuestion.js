'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconQuestion = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "question-a", d: "M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10m0-22C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0m0 5a4.007 4.007 0 0 0-3.771 2.666.998.998 0 1 0 1.884.668A2.001 2.001 0 0 1 14 9c0 1.104-.897 2-2 2a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-1.127A4.006 4.006 0 0 0 16 9c0-2.205-1.794-4-4-4m-.005 11.99a1.01 1.01 0 0 0-1.006 1.005A1.01 1.01 0 0 0 11.995 19c.553 0 1.005-.453 1.005-1.005 0-.552-.452-1.005-1.005-1.005" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#question-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconQuestion, props);
});

module.exports = index;
