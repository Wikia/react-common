'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconEyeCrossed = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconEyeCrossed-a", d: "M18.204 16.79l-3.497-3.497a3.003 3.003 0 0 0-4-4L7.59 6.176A10.632 10.632 0 0 1 12 5.22c4.4 0 8.347 2.711 9.934 6.781a10.636 10.636 0 0 1-3.73 4.79M12 18.78A10.674 10.674 0 0 1 2.067 12a10.63 10.63 0 0 1 3.73-4.79l3.496 3.496a3.004 3.004 0 0 0 4 4l3.118 3.117A10.633 10.633 0 0 1 12 18.78m11.944-6.449a1.008 1.008 0 0 0 0-.664A12.677 12.677 0 0 0 12 3.22c-2.104 0-4.121.523-5.904 1.463l-3.389-3.39a.999.999 0 1 0-1.414 1.414L4.367 5.78a12.623 12.623 0 0 0-4.31 5.888.995.995 0 0 0 0 .664A12.676 12.676 0 0 0 12 20.782c2.105 0 4.122-.524 5.905-1.464l3.388 3.39a1 1 0 0 0 1.414-1.415l-3.073-3.073a12.628 12.628 0 0 0 4.31-5.888" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconEyeCrossed-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconEyeCrossed, props);
});

module.exports = index;
