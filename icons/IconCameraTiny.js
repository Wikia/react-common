'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconCameraTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconCameraTiny-a", d: "M10 10H2V5c.266 0 .52-.105.707-.293L5.414 2h1.172l2.707 2.707A.996.996 0 0 0 10 5v5zm1-7h-.586L7.707.293A.996.996 0 0 0 7 0H5a.996.996 0 0 0-.707.293L1.586 3H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM1.005 2a1 1 0 1 0 0-2h-.01A.996.996 0 0 0 0 1c0 .552.453 1 1.005 1m5 4C5.452 6 5 6.453 5 7.005c0 .552.452 1.005 1.005 1.005.553 0 1.005-.453 1.005-1.005C7.01 6.453 6.558 6 6.005 6" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconCameraTiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCameraTiny, props);
});

module.exports = index;