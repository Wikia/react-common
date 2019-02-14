'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconPencilSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconPencilSmall-a", d: "M14 8.586L9.414 4 11 2.414 15.586 7 14 8.586zM6.586 16H2v-4.586l6-6L12.586 10l-6 6zm11.121-9.707l-6-6a.999.999 0 0 0-1.414 0l-9.999 10a.99.99 0 0 0-.217.325A.991.991 0 0 0 0 11v6a1 1 0 0 0 1 1h6c.13 0 .26-.026.382-.077a.99.99 0 0 0 .326-.217l9.999-9.999a.999.999 0 0 0 0-1.414z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconPencilSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconPencilSmall, props);
});

module.exports = index;
