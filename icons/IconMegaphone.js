'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsMegaphone = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement("path", { d: "M3.9 4.5C1.8 4.5 0 6.3 0 8.4s1.8 3.9 3.9 3.9H4l3 4.9c.4.8 1.5 1 2.4.6.8-.4 1-1.5.6-2.4l-1.9-3h2.1l7.9 4.5V0l-7.9 4.5H3.9z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsMegaphone;
