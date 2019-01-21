'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsUpload = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24" }, props),
    React.createElement("path", { d: "M12 17.999a1 1 0 0 0 1-1V5.413l3.293 3.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-5-5a.999.999 0 0 0-1.089-.216.999.999 0 0 0-.325.216l-5 5a.999.999 0 1 0 1.414 1.414L11 5.413v11.586a1 1 0 0 0 1 1zm-7-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5a1 1 0 0 0-2 0v4H6v-4a1 1 0 0 0-1-1z", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsUpload;
