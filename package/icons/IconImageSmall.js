'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconImageSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconImageSmall-a", d: "M2.778 15.222v-4.61l2.666-2.666 4.35 4.35a.915.915 0 0 0 1.257 0l2.216-2.217 1.955 1.956v3.187H2.778zM15.222 2.778V9.52l-1.327-1.327a.915.915 0 0 0-1.257 0l-2.216 2.216-4.35-4.35a.915.915 0 0 0-1.256 0L2.778 8.1V2.778h12.444zM16.112 1H1.888A.89.89 0 0 0 1 1.889V16.11c0 .492.398.889.889.889H16.11c.49 0 .889-.397.889-.889V1.89a.89.89 0 0 0-.888-.89zm-5.779 6.222a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconImageSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconImageSmall, props);
});

module.exports = index;
