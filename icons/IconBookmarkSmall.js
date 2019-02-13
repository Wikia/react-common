'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconBookmarkSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconBookmarkSmall-a", d: "M14 14.502l-4.616-1.916a1.004 1.004 0 0 0-.768 0L4 14.502V3h10v11.502zM15 1H3a1 1 0 0 0-1 1v14a1.002 1.002 0 0 0 1.384.924L9 14.592l5.616 2.332a1.007 1.007 0 0 0 .94-.092c.277-.185.444-.498.444-.832V2a1 1 0 0 0-1-1zM7 9h1v1a1 1 0 1 0 2 0V9h1a1 1 0 1 0 0-2h-1V6a1 1 0 1 0-2 0v1H7a1 1 0 1 0 0 2" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconBookmarkSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconBookmarkSmall, props);
});

module.exports = index;