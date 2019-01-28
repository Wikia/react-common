'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconReply = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "reply-a", d: "M11 14c4.497 0 8.606 2.324 10.955 6.003.03-.331.045-.666.045-1.003 0-6.065-4.935-11-11-11a1 1 0 0 1-1-1V3.414L2.414 11 10 18.586V15a1 1 0 0 1 1-1m11.31 10h-.004a1.003 1.003 0 0 1-.94-.668A11.003 11.003 0 0 0 12 16.045V21a.999.999 0 0 1-1.707.707l-10-10a.999.999 0 0 1 0-1.414l10-10A1.002 1.002 0 0 1 12 1v5.038c6.703.513 12 6.13 12 12.962 0 1.498-.252 2.958-.75 4.339a1 1 0 0 1-.94.66" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#reply-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconReply, props);
});

module.exports = index;
