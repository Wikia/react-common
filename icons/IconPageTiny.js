'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconPageTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M5 7v3H3V2h6v4H6a1 1 0 0 0-1 1m5.935.326c.03-.086.047-.175.053-.265.001-.022.012-.04.012-.061V1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4a.985.985 0 0 0 .383-.077.986.986 0 0 0 .325-.217l3.998-3.998.004-.005a.958.958 0 0 0 .19-.283c.015-.03.023-.062.035-.094", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconPageTiny, props);
});

module.exports = index;