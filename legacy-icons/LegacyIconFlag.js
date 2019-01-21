'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsFlag = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24" }, props),
    React.createElement("path", { d: "M1.487 5.166a.973.973 0 0 0-.356 1.33l9.247 16.017a.972.972 0 0 0 1.33.357.973.973 0 0 0 .356-1.33L2.817 5.522a.973.973 0 0 0-1.33-.356m9.481 9.39c1.172-2.065 2.62-2.225 4.537-2.225l.977.004c1.776 0 3.825-.138 5.676-1.796.352-.316.435-.835.199-1.245l-4.5-7.794a1.003 1.003 0 0 0-1.542-.236c-1.31 1.2-2.763 1.3-4.26 1.3l-1.146-.007c-1.984 0-4.218.223-5.878 2.728l5.567 9.643a1 1 0 0 0 .37-.372", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsFlag;
