'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsAlert = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props),
    React.createElement("path", { fillRule: "evenodd", d: "M23.905 21.84a.775.775 0 0 1-.018.777.802.802 0 0 1-.686.383H.8a.804.804 0 0 1-.688-.383.775.775 0 0 1-.017-.777l11.2-20.458c.28-.51 1.13-.51 1.41 0l11.2 20.458zM11 8.997v6.006c0 .544.448.997 1 .997.556 0 1-.446 1-.997V8.997C13 8.453 12.552 8 12 8c-.556 0-1 .446-1 .997zM11 19c0 .556.448 1 1 1 .556 0 1-.448 1-1 0-.556-.448-1-1-1-.556 0-1 .448-1 1z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsAlert;
