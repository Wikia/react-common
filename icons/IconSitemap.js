'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconSitemap = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "sitemap-a", d: "M3 18.5a1 1 0 0 0 1-1V13h7v4.5a1 1 0 1 0 2 0V13h7v4.5a1 1 0 1 0 2 0V12a1 1 0 0 0-1-1h-8V6.5a1 1 0 1 0-2 0V11H3a1 1 0 0 0-1 1v5.5a1 1 0 0 0 1 1M10 2h4a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2M5 22H1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2m18 0h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2m-9 0h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#sitemap-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconSitemap, props);
});

module.exports = index;
