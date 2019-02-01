'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconHomeTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconHomeTiny-a", d: "M9 10h1V6.414l-4-4-4 4V10h1V9c0-1.654 1.346-3 3-3s3 1.346 3 3v1zm2 2H8a1 1 0 0 1-1-1V9c0-.55-.449-1-1-1-.551 0-1 .45-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V6c0-.265.105-.52.293-.707l5-5a.999.999 0 0 1 1.414 0l5 5A.997.997 0 0 1 12 6v5a1 1 0 0 1-1 1z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconHomeTiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconHomeTiny, props);
});

module.exports = index;