'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconMapSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "map-small", d: "M16 13.325l-3 1.2V4.688l3-1.2v9.837zm-5 1.2l-3-1.2V3.488l3 1.2v9.837zm-5-1.2l-3 1.2V4.688l3-1.2v9.837zM17.561 1.186a1.003 1.003 0 0 0-.933-.1L12 2.935 7.376 1.088a.929.929 0 0 0-.101-.035h-.001l-.002-.002h-.001a.971.971 0 0 0-.266-.037h-.009c-.067-.04-.187.013-.278.041h-.002l-.003.001-.089.031-4.996 1.997A1 1 0 0 0 1 4.012V16a1 1 0 0 0 1.372.927L7 15.078l4.624 1.848c.033.013.067.025.101.035h.001l.002.002h.001c.088.024.204.005.267.037h.009a.974.974 0 0 0 .277-.041h.002l.003-.001c.029-.009.06-.02.089-.032l4.996-1.996a1 1 0 0 0 .628-.927V2.013a.999.999 0 0 0-.439-.827z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#map-small" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconMapSmall, props);
});

module.exports = index;
