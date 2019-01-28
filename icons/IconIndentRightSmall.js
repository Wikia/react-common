'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconIndentRightSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconIndentRightSmall-a", d: "M13 8H3.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5A.983.983 0 0 0 0 8.997v.006a.988.988 0 0 0 .293.704l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L3.414 10H13a1 1 0 1 0 0-2m4-7a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1" })
    ),
    React.createElement("use", { fillRule: "evenodd", transform: "rotate(-180 9 9)", xlinkHref: "#id-icons/IconIndentRightSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconIndentRightSmall, props);
});

module.exports = index;
