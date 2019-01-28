'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconPencilTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "pencil-tiny", d: "M8.5 6.086L5.914 3.5 7 2.414 9.586 5 8.5 6.086zM4.586 10H2V7.414l2.5-2.5L7.086 7.5l-2.5 2.5zm7.121-5.707l-4-4a.999.999 0 0 0-1.414 0l-6 6A1 1 0 0 0 0 7v4a1 1 0 0 0 1 1h4c.265 0 .52-.105.707-.293l6-6a.999.999 0 0 0 0-1.414z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#pencil-tiny" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconPencilTiny, props);
});

module.exports = index;
