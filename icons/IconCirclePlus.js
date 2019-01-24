'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconCirclePlus = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, props),
    React.createElement("path", { d: "M12 21.333c5.155 0 9.333-4.178 9.333-9.333S17.155 2.667 12 2.667 2.667 6.845 2.667 12 6.845 21.333 12 21.333zm1.333-10.666V6.66c0-.737-.597-1.327-1.333-1.327-.742 0-1.333.595-1.333 1.328v4.01H6.66c-.737 0-1.327.597-1.327 1.333 0 .743.595 1.334 1.328 1.334h4.01v4.006c0 .737.597 1.327 1.333 1.327.743 0 1.334-.596 1.334-1.33v-4.01h4.006c.737 0 1.327-.597 1.327-1.333 0-.743-.596-1.334-1.33-1.334h-4.01zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCirclePlus, props);
});

module.exports = index;
