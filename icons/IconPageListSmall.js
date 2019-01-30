'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconPageListSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconPageListSmall-a", d: "M3 15h3v-3H3v3zm4-5H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm4.587-7H16a1 1 0 1 0 0-2h-4.413a1 1 0 1 0 0 2M16 15h-4.413a1 1 0 1 0 0 2H16a1 1 0 1 0 0-2m0-10h-4.413a1 1 0 1 0 0 2H16a1 1 0 1 0 0-2M3 6h3V3H3v3zm4-5H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm9 10h-4.413a1 1 0 1 0 0 2H16a1 1 0 1 0 0-2" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconPageListSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconPageListSmall, props);
});

module.exports = index;
