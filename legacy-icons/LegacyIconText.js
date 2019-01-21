'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsText = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24" }, props),
    React.createElement("path", { d: "M23 0H1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1c.334 0 .646-.167.832-.445L4.535 4H10v15.382l-3.447 1.723c-.339.17-.553.516-.553.895v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1c0-.379-.214-.725-.553-.895L14 19.382V4h5.465l1.703 2.555c.186.278.498.445.832.445h1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsText;
