'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconReplySmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconReplySmall-a", d: "M17 18a1 1 0 0 1-1-1c0-4.963-4.037-9-9-9H3.414l4.293 4.293a.999.999 0 1 1-1.414 1.414l-6-6A.993.993 0 0 1 0 7.003v-.006a.988.988 0 0 1 .293-.704l6-6a.999.999 0 1 1 1.414 1.414L3.414 6H7c6.065 0 11 4.935 11 11a1 1 0 0 1-1 1" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconReplySmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconReplySmall, props);
});

module.exports = index;
