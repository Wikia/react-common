'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconBoldActiveSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconBoldActiveSmall-a", d: "M15 12.34c0 2.574-2.16 4.66-4.823 4.66H5.294C4.58 17 4 16.44 4 15.75V8.931c0-.69.58-1.25 1.294-1.25h4.883c2.663 0 4.823 2.087 4.823 4.66zm-4.823 2.16c1.234 0 2.235-.967 2.235-2.16 0-1.192-1.001-2.159-2.235-2.159H6.588V14.5h3.589zm-2-6.819c.91 0 1.647-.712 1.647-1.59 0-.879-.738-1.591-1.648-1.591H6.588v3.181h1.588zm0 2.5H5.293C4.58 10.181 4 9.621 4 8.931V3.25C4 2.56 4.58 2 5.294 2h2.882c2.34 0 4.236 1.831 4.236 4.09 0 2.26-1.897 4.091-4.236 4.091z" })
    ),
    React.createElement("use", { xlinkHref: "#id-icons/IconBoldActiveSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBoldActiveSmall, props);
});

module.exports = index;