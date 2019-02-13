'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconTwitterSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconTwitterSmall-a", d: "M16.105 5.443v.459c0 4.705-3.67 10.098-10.42 10.098-2.132 0-4.027-.574-5.685-1.607.355 0 .592.115.947.115 1.658 0 3.316-.574 4.619-1.492-1.54 0-2.96-1.032-3.434-2.524.236 0 .473.115.71.115.355 0 .355 0 .83-.115C1.894 10.148.354 8.656.354 6.934c0 .345 1.303.345 1.895.46C1.303 6.703.71 5.671.71 4.41c0-.689.237-1.262.593-1.836C3.079 4.754 5.92 6.13 8.882 6.36c-.119-.345-.119-.574-.119-.804C8.763 3.607 10.421 2 12.434 2c1.066 0 2.013.344 2.724 1.148.829-.23 1.54-.46 2.25-.918-.355.918-.947 1.491-1.54 1.95.71-.114 1.54-.344 2.132-.573-.592.688-1.184 1.377-1.895 1.836z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconTwitterSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconTwitterSmall, props);
});

module.exports = index;