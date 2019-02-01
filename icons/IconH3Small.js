'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconH3Small = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconH3Small-a", d: "M17.925 3.381A.988.988 0 0 0 18 3.003v-.006a.988.988 0 0 0-.293-.704.998.998 0 0 0-.704-.293H11a1 1 0 1 0 0 2h3.586l-2.293 2.293a.983.983 0 0 0-.293.704v.006a1.007 1.007 0 0 0 .293.704 1.009 1.009 0 0 0 .704.293H13c1.654 0 3 1.346 3 3a3.004 3.004 0 0 1-4.501 2.598 1 1 0 1 0-1.002 1.732A5.006 5.006 0 0 0 18 11a5.009 5.009 0 0 0-3.002-4.584l2.709-2.709a.983.983 0 0 0 .218-.326M7 2.001a1 1 0 0 0-1 1v5H2V3a1 1 0 1 0-2 0v12a1 1 0 1 0 2 0v-5h4v5a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconH3Small-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconH3Small, props);
});

module.exports = index;