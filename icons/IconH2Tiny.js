'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconH2Tiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconH2Tiny-a", d: "M5 0a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V7H2v4a1 1 0 0 1-2 0V1a1 1 0 0 1 2 0v4h2V1a1 1 0 0 1 1-1zm4.5 7a.5.5 0 0 0-.5.5V10h2a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1V7.5C7 6.122 8.122 5 9.5 5a.5.5 0 0 0 .5-.5V3c0-.552-.449-1-1-1H8a1 1 0 0 1 0-2h1c1.654 0 3 1.346 3 3v1.5C12 5.878 10.878 7 9.5 7z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconH2Tiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconH2Tiny, props);
});

module.exports = index;