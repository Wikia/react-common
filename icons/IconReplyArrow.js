'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconReplyArrow = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M11.628 6.479V1.52a.523.523 0 0 0-.298-.476.485.485 0 0 0-.538.09l-9.628 9.113a.533.533 0 0 0 0 .77l9.628 9.113a.486.486 0 0 0 .538.09.523.523 0 0 0 .298-.475V14.81c7.104.338 10.388 7.803 10.421 7.88a.5.5 0 0 0 .561.298.516.516 0 0 0 .396-.51v-2.733c0-10.096-6.926-13.062-11.378-13.267", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconReplyArrow, props);
});

module.exports = index;
