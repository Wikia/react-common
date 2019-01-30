'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconBoldActiveTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconBoldActiveTiny-a", d: "M5 4.696h1c.414 0 .75-.351.75-.783 0-.432-.336-.783-.75-.783H5v1.566zm1 3.13H3.5c-.828 0-1.5-.7-1.5-1.565V1.565C2 .701 2.672 0 3.5 0H6c2.07 0 3.75 1.753 3.75 3.913S8.07 7.826 6 7.826zM5 8.87h2.25c.414 0 .75-.351.75-.783 0-.432-.336-.783-.75-.783H5V8.87zM7.25 12H3.5c-.828 0-1.5-.7-1.5-1.565V5.739c0-.864.672-1.565 1.5-1.565h3.75c2.07 0 3.75 1.753 3.75 3.913S9.32 12 7.25 12z" })
    ),
    React.createElement("use", { xlinkHref: "#id-icons/IconBoldActiveTiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBoldActiveTiny, props);
});

module.exports = index;
