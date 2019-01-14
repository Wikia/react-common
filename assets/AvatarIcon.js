'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsAvatarIcon = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("circle", { fill: "#FFF", cx: "12", cy: "12", r: "12" }),
      React.createElement("path", { d: "M12 12.267a3.203 3.203 0 0 1-3.2-3.2V8c0-1.765 1.435-3.2 3.2-3.2 1.765 0 3.2 1.435 3.2 3.2v1.067c0 1.764-1.435 3.2-3.2 3.2zm-2.667 1.066h5.334a3.737 3.737 0 0 1 3.733 3.734c0 .294.127 4.722-.167 4.722 0 0-4.702 1.44-6.781 1.282-2.08-.16-5.697-2.237-5.697-2.237-.295 0-.155-3.473-.155-3.767a3.737 3.737 0 0 1 3.733-3.734z", fill: "#999" }),
      React.createElement("circle", { stroke: "#FFF", strokeWidth: "4", cx: "12", cy: "12", r: "10" }),
      React.createElement("circle", { stroke: "#999", strokeWidth: "2", cx: "12", cy: "12", r: "11" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsAvatarIcon;
