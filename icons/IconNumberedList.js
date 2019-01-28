'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconNumberedList = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconNumberedList-a", d: "M2.707 5.707L3 5.414V10a1 1 0 1 0 2 0V3a.999.999 0 0 0-1.707-.707l-2 2a.999.999 0 1 0 1.414 1.414M12 4h10a1 1 0 1 0 0-2H12a1 1 0 1 0 0 2M7 16c0-1.654-1.346-3-3-3a2.94 2.94 0 0 0-2.126.892.999.999 0 1 0 1.432 1.396A.957.957 0 0 1 4 15c.552 0 1 .449 1 1 0 .5-.85 1.138-1.6 1.7C2.275 18.544 1 19.5 1 21a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2H3.71c.271-.236.59-.475.89-.7C5.725 18.456 7 17.5 7 16m15 4H12a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2m0-9H12a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconNumberedList-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconNumberedList, props);
});

module.exports = index;
