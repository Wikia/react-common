'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconRefreshSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconRefreshSmall-a", d: "M16 9a1 1 0 0 0-1 1c0 3.309-2.691 6-6 6s-6-2.691-6-6 2.691-6 6-6c1.191 0 2.336.359 3.306 1H11a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1V2a1 1 0 1 0-2 0v1.773A7.99 7.99 0 0 0 9 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8a1 1 0 0 0-1-1" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconRefreshSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconRefreshSmall, props);
});

module.exports = index;
