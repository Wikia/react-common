'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconBookmark = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconBookmark-a", d: "M9 10h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V6a1 1 0 1 0-2 0v2H9a1 1 0 1 0 0 2m10 10l-6.4-4.8a.995.995 0 0 0-1.2 0L5 20V3h14v17zm1-19H4a1 1 0 0 0-1 1v20a1.001 1.001 0 0 0 1.6.8l7.4-5.55 7.4 5.55A1.002 1.002 0 0 0 21 22V2a1 1 0 0 0-1-1z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconBookmark-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBookmark, props);
});

module.exports = index;
