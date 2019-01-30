'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconFlagTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconFlagTiny-a", d: "M3 7h5L6.59 5.707A.957.957 0 0 1 6.27 5a.96.96 0 0 1 .32-.707L8 3H3v4zm-1 5a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0h7.03l.003.001h.017a1 1 0 0 1 .942.872v.001c.008.064.01.128.006.191v.002a.997.997 0 0 1-.283.631v.001l-.002.002-.001.001-.001.001-.002.002-.002.002L8.414 5l2.293 2.293.003.003.001.001.001.001.001.001.002.002v.001a.997.997 0 0 1 .283.631v.002a1.02 1.02 0 0 1-.006.191v.001a.996.996 0 0 1-.315.609 1 1 0 0 1-.627.263h-.017L10.03 9H3v2a1 1 0 0 1-1 1z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconFlagTiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconFlagTiny, props);
});

module.exports = index;
