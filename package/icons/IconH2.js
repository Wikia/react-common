'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconH2 = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconH2-a", d: "M9 2a1 1 0 0 0-1 1v8H2V3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0v-8h6v8a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1m14 18h-6.934c.331-2.394 1.857-3.729 3.593-5.248C21.693 12.973 24 10.953 24 7c0-2.757-2.243-5-5-5s-5 2.243-5 5a1 1 0 1 0 2 0c0-1.654 1.346-3 3-3s3 1.346 3 3c0 3.047-1.695 4.529-3.659 6.248C16.307 15.027 14 17.047 14 21a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconH2-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconH2, props);
});

module.exports = index;
