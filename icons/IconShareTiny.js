'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconShareTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconShareTiny-a", d: "M9.5 7c-.694 0-1.324.285-1.777.743L4.987 6.375l-.014-.006a2.504 2.504 0 0 0 0-.738l.014-.006 2.736-1.368A2.495 2.495 0 0 0 9.5 5C10.878 5 12 3.878 12 2.5S10.878 0 9.5 0a2.503 2.503 0 0 0-2.497 2.38l-2.91 1.455a1.115 1.115 0 0 0-.172.109A2.485 2.485 0 0 0 2.5 3.5 2.503 2.503 0 0 0 0 6c0 1.378 1.122 2.5 2.5 2.5.527 0 1.018-.164 1.421-.444.053.041.11.077.172.109l2.91 1.455A2.503 2.503 0 0 0 9.5 12c1.378 0 2.5-1.122 2.5-2.5S10.878 7 9.5 7" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconShareTiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconShareTiny, props);
});

module.exports = index;