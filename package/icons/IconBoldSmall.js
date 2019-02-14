'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconBoldSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconBoldSmall-a", d: "M9.5 15H6v-5h3.5c1.378 0 2.5 1.121 2.5 2.5S10.878 15 9.5 15zM6 4h2c1.103 0 2 .896 2 2s-.897 2-2 2H6V4zm5.236 4.349C11.716 7.688 12 6.877 12 6c0-2.205-1.794-4-4-4H5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h4.5c2.481 0 4.5-2.019 4.5-4.5a4.506 4.506 0 0 0-2.764-4.151z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconBoldSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBoldSmall, props);
});

module.exports = index;
