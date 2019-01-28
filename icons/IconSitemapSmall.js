'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconSitemapSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconSitemapSmall-a", d: "M2 14a1 1 0 0 0 1-1v-3h5v3a1 1 0 1 0 2 0v-3h5v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1h-6V5a1 1 0 1 0-2 0v3H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1M8 2h2a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2M3 16H1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2m14 0h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2m-7 0H8a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconSitemapSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconSitemapSmall, props);
});

module.exports = index;
