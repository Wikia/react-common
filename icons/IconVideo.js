'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconVideo = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconVideo-a", d: "M2 18h12v-2.73a.999.999 0 0 1 1.423-.907L22 17.43V6.57l-6.577 3.067A1 1 0 0 1 14 8.73V6H2v12zm21 2a.998.998 0 0 1-.423-.094L16 16.84V19a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2.16l6.577-3.066A1 1 0 0 1 24 5v14a1.002 1.002 0 0 1-1 1z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconVideo-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconVideo, props);
});

module.exports = index;
