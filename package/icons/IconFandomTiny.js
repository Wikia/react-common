'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconFandomTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconFandomTiny-a", d: "M11.095 5.658c0 .1-.04.196-.11.267l-4.641 4.658a.344.344 0 0 1-.256.112.369.369 0 0 1-.266-.113l-.328-.308a.143.143 0 0 1-.003-.205l5.356-5.365c.091-.091.248-.027.248.101v.853zM5.144 9.171l-.266.237a.222.222 0 0 1-.302-.006L1.044 5.949a.46.46 0 0 1-.14-.33v-.644c0-.233.284-.35.45-.186l3.75 3.665c.065.064.175.197.175.358a.497.497 0 0 1-.135.359zM1.987 2.49l1.215-1.203a.146.146 0 0 1 .205 0l4.069 4.027c.436.432.436 1.13 0 1.562L6.262 8.078a.146.146 0 0 1-.205 0L1.987 4.05a1.09 1.09 0 0 1-.324-.78c0-.296.115-.573.324-.78zm4.815.688l1.27-1.256a1.121 1.121 0 0 1 1.605.028l1.285 1.272a.143.143 0 0 1 0 .203L9.007 5.361a.146.146 0 0 1-.205 0l-2-1.98a.143.143 0 0 1 0-.203zm5.049-.239L9.019.09a.301.301 0 0 0-.426-.001L6.347 2.332a.448.448 0 0 1-.63.002L3.47.113A.301.301 0 0 0 3.048.11L.155 2.933A.512.512 0 0 0 0 3.299v2.672c0 .137.055.268.152.364l5.639 5.578a.301.301 0 0 0 .423 0l5.634-5.578A.512.512 0 0 0 12 5.971v-2.67a.512.512 0 0 0-.15-.362z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconFandomTiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconFandomTiny, props);
});

module.exports = index;
