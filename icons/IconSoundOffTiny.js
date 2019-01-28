'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconSoundOffTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "sound-off-tiny", d: "M11 9a.997.997 0 0 1-.707-.293L9 7.414 7.707 8.707a.999.999 0 1 1-1.414-1.414L7.586 6 6.293 4.707a.999.999 0 1 1 1.414-1.414L9 4.586l1.293-1.293a.999.999 0 1 1 1.414 1.414L10.414 6l1.293 1.293A.999.999 0 0 1 11 9m-8 2a1 1 0 0 1-1-1V9H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1V2a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#sound-off-tiny" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconSoundOffTiny, props);
});

module.exports = index;
