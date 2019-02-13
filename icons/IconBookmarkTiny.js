'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconBookmarkTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconBookmarkTiny-a", d: "M10 9.605L6.371 8.154a1.01 1.01 0 0 0-.742 0L2 9.605V2h8v7.605zM11 0H1a1 1 0 0 0-1 1v10.083a1.001 1.001 0 0 0 1.371.928L6 10.16l4.629 1.851a.992.992 0 0 0 .932-.1c.274-.187.439-.496.439-.828V1a1 1 0 0 0-1-1zM5 5.917a1 1 0 1 0 2 0 1 1 0 1 0 0-2 1 1 0 1 0-2 0 1 1 0 1 0 0 2" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconBookmarkTiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBookmarkTiny, props);
});

module.exports = index;