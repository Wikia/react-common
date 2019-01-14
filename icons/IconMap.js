'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsMap = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M22.725 1.039L17 2.675v20.08l6.275-1.793A1 1 0 0 0 24 20V2a1 1 0 0 0-1.275-.961M15 2.72l-6-1.5v20.06l6 1.5zM1 23a.993.993 0 0 0 .275-.039L7 21.326V1.246L.725 3.039A1 1 0 0 0 0 4v18a.998.998 0 0 0 1 1", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsMap;
