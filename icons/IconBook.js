'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconBook = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconBook-a", d: "M13 8.5v8.308A6.458 6.458 0 0 1 17.5 15c1.747 0 3.333.677 4.5 1.794V8.5C22 6.019 19.981 4 17.5 4a4.474 4.474 0 0 0-3.183 1.317A4.474 4.474 0 0 0 13 8.5zM6.5 4a4.474 4.474 0 0 0-3.183 1.317A4.474 4.474 0 0 0 2 8.5v8.308A6.458 6.458 0 0 1 6.5 15c1.747 0 3.333.677 4.5 1.794V8.5C11 6.019 8.981 4 6.5 4zM23 21h.01H23zm0 1c-.518 0-.98-.396-1.026-.912A4.467 4.467 0 0 0 17.5 17a4.474 4.474 0 0 0-3.183 1.317 4.438 4.438 0 0 0-1.29 2.766c-.044.523-.5.935-1.012.917-.541-.016-.995-.391-1.041-.912A4.467 4.467 0 0 0 6.5 17a4.474 4.474 0 0 0-3.183 1.317 4.438 4.438 0 0 0-1.29 2.766A1 1 0 0 1 1.03 22C.478 22 0 21.552 0 21V8.5c0-1.737.676-3.37 1.902-4.597A6.463 6.463 0 0 1 6.5 2a6.501 6.501 0 0 1 5.497 3.034c.256-.405.559-.784.905-1.131A6.463 6.463 0 0 1 17.5 2C21.084 2 24 4.916 24 8.5V21a1 1 0 0 1-1 1z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconBook-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBook, props);
});

module.exports = index;