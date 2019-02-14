'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconTagTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconTagTiny-a", d: "M10 5.586l-4 4L2.414 6l4-4H10v3.586zM11 0H6a1 1 0 0 0-.707.293l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0l5-5A.997.997 0 0 0 12 6V1a1 1 0 0 0-1-1zM8 4.988c.26 0 .52-.11.71-.29.18-.189.29-.45.29-.71 0-.26-.11-.52-.29-.71-.38-.37-1.05-.37-1.42 0-.18.19-.29.45-.29.71 0 .26.11.521.29.71.19.18.45.29.71.29" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconTagTiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconTagTiny, props);
});

module.exports = index;
