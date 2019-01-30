'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconCheckboxSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconCheckboxSmall-a", d: "M3 15h12V3H3v12zM16 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM7.293 11.707a.997.997 0 0 0 1.414 0l4-4a.999.999 0 1 0-1.414-1.414L8 9.586 6.707 8.293a.999.999 0 1 0-1.414 1.414l2 2z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconCheckboxSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCheckboxSmall, props);
});

module.exports = index;
