'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconShare = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconShare-a", d: "M19 22a3.004 3.004 0 0 1-2.724-4.256 1.055 1.055 0 0 0 .087-.174A3.004 3.004 0 0 1 19 16c1.654 0 3 1.346 3 3s-1.346 3-3 3M7.724 13.256a1.055 1.055 0 0 0-.087.174A3.004 3.004 0 0 1 5 15c-1.654 0-3-1.346-3-3s1.346-3 3-3c1.137 0 2.128.636 2.637 1.57a1.055 1.055 0 0 0 .087.174c.177.382.276.808.276 1.256 0 .448-.099.874-.276 1.256M19 2c1.654 0 3 1.346 3 3s-1.346 3-3 3a3.004 3.004 0 0 1-2.637-1.57 1.055 1.055 0 0 0-.087-.174A3.004 3.004 0 0 1 19 2m0 12a4.998 4.998 0 0 0-3.931 1.912l-5.24-2.611a5.04 5.04 0 0 0 0-2.602l5.24-2.611A4.998 4.998 0 0 0 24 5c0-2.757-2.243-5-5-5a5.006 5.006 0 0 0-4.829 6.301l-5.24 2.611A4.998 4.998 0 0 0 0 12a4.998 4.998 0 1 0 8.931 3.088l5.24 2.611A5.006 5.006 0 0 0 19 24c2.757 0 5-2.243 5-5s-2.243-5-5-5" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconShare-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconShare, props);
});

module.exports = index;