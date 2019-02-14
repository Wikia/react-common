'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconTrashSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconTrashSmall-a", d: "M4 16h10V6H4v10zM16 4H2a1 1 0 1 0 0 2v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 1 0 0-2zM6 2h6a1 1 0 1 0 0-2H6a1 1 0 1 0 0 2m5 12a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1m-4 0a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconTrashSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconTrashSmall, props);
});

module.exports = index;
