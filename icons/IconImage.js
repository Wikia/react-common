'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconImage = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconImage-a", d: "M3 21v-6.586l4-4 6.293 6.293a.999.999 0 0 0 1.414 0L18 13.414l3 3V21H3zM21 3v10.586l-2.293-2.293a.999.999 0 0 0-1.414 0L14 14.586 7.707 8.293a.999.999 0 0 0-1.414 0L3 11.586V3h18zm1-2H2a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-8 8c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconImage-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconImage, props);
});

module.exports = index;
