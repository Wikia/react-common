'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconBoldActive = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconBoldActive-a", d: "M21 16.545A7.454 7.454 0 0 1 13.546 24H6a2 2 0 0 1-2-2V11.09a2 2 0 0 1 2-2h7.546A7.455 7.455 0 0 1 21 16.545zM13.546 20a3.454 3.454 0 0 0 0-6.91H8V20h5.546zM10.454 9.09a2.545 2.545 0 1 0 0-5.09H8v5.09h2.454zm0 4H6a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h4.454a6.545 6.545 0 1 1 0 13.09z" })
    ),
    React.createElement("use", { xlinkHref: "#id-icons/IconBoldActive-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBoldActive, props);
});

module.exports = index;
