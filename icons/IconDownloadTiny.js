'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconDownloadTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconDownloadTiny-a", d: "M5.293 7.707l-3-3a.999.999 0 1 1 1.414-1.414L5 4.586V1a1 1 0 1 1 2 0v3.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3A.993.993 0 0 1 6.003 8h-.006a.988.988 0 0 1-.704-.293zM11 7.75a1 1 0 0 1 1 1V11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8.75a1 1 0 1 1 2 0V10h8V8.75a1 1 0 0 1 1-1z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconDownloadTiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconDownloadTiny, props);
});

module.exports = index;