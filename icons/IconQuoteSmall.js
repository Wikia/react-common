'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconQuoteSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "quote-small", d: "M4 14a2 2 0 0 1 0-4 2 2 0 0 1 0 4m0-6c-.48 0-.941.086-1.369.242.748-2.182 2.127-4.116 3.953-5.43A1.001 1.001 0 0 0 5.416 1.19C2.075 3.593 0 7.735 0 12c0 2.205 1.794 4 4 4s4-1.795 4-4-1.794-4-4-4m10 6c-1.103 0-2-.896-2-2s.897-2 2-2 2 .896 2 2-.897 2-2 2m0-6c-.48 0-.941.085-1.369.24.748-2.181 2.127-4.115 3.953-5.428a1.001 1.001 0 0 0-1.168-1.624C12.075 3.593 10 7.735 10 12c0 2.205 1.794 4 4 4s4-1.795 4-4-1.794-4-4-4" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#quote-small" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconQuoteSmall, props);
});

module.exports = index;
