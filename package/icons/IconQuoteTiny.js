'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconQuoteTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconQuoteTiny-a", d: "M4.667 1.766A7.485 7.485 0 0 0 2.157 6H4c.552 0 1 .449 1 1v3a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7c0-.065.025-.124.037-.185A9.477 9.477 0 0 1 3.378.236a.998.998 0 0 1 1.409.12 1.001 1.001 0 0 1-.12 1.41zM10.999 6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7c0-.065.026-.124.038-.186a9.478 9.478 0 0 1 3.34-6.579 1.001 1.001 0 1 1 1.29 1.53A7.479 7.479 0 0 0 9.158 6H11z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconQuoteTiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconQuoteTiny, props);
});

module.exports = index;
