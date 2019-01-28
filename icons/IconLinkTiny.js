'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconLinkTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconLinkTiny-a", d: "M8.171 0A3.834 3.834 0 0 1 12 3.829c0 .549-.116 1.082-.344 1.584a1 1 0 0 1-1.821-.826A1.831 1.831 0 0 0 8.171 2c-.488 0-.947.19-1.293.536L5.535 3.878A1.82 1.82 0 0 0 5 5.171c0 .489.19.949.535 1.294A1 1 0 1 1 4.122 7.88 3.804 3.804 0 0 1 3 5.171c0-1.022.398-1.983 1.121-2.707l1.343-1.342A3.8 3.8 0 0 1 8.171 0zM6.463 4.121a.999.999 0 0 1 1.414 0A3.805 3.805 0 0 1 9 6.828a3.808 3.808 0 0 1-1.122 2.707l-1.343 1.342A3.803 3.803 0 0 1 3.828 12 3.833 3.833 0 0 1 .343 6.587a1 1 0 1 1 1.821.826 1.83 1.83 0 0 0 2.957 2.051l1.343-1.342A1.82 1.82 0 0 0 7 6.83a1.82 1.82 0 0 0-.536-1.294 1 1 0 0 1-.001-1.414z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconLinkTiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconLinkTiny, props);
});

module.exports = index;
