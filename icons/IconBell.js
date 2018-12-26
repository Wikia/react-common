'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsBell = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M21.882 19.472a.998.998 0 0 0-.05-1.026C21.814 18.418 20 15.656 20 12V8c0-4.411-3.59-8-8-8-4.411 0-8 3.589-8 8v4c0 3.628-1.815 6.419-1.832 6.446a1.003 1.003 0 0 0-.05 1.026c.175.325.514.528.882.528h18a1 1 0 0 0 .882-.528M12 24c1.474 0 2.75-.81 3.444-2H8.556c.694 1.19 1.97 2 3.444 2", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsBell;
