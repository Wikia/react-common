'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconCalendar = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconCalendar-a", d: "M16.696 22h5.217v-4h-5.217v4zM2.087 22h5.217v-4H2.087v4zM7.304 5v2c0 .553.468 1 1.044 1 .576 0 1.043-.447 1.043-1V5h5.218v2c0 .553.467 1 1.043 1 .576 0 1.044-.447 1.044-1V5h5.217v5H2.087V5h5.217zm9.392 11h5.217v-4h-5.217v4zM2.087 16h5.217v-4H2.087v4zm7.304 6h5.218v-4H9.39v4zm0-6h5.218v-4H9.39v4zM22.957 3h-6.261V1c0-.553-.468-1-1.044-1-.576 0-1.043.447-1.043 1v2H9.39V1c0-.553-.467-1-1.043-1-.576 0-1.044.447-1.044 1v2h-6.26C.466 3 0 3.447 0 4v19c0 .553.467 1 1.043 1h21.914c.576 0 1.043-.447 1.043-1V4c0-.553-.467-1-1.043-1z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconCalendar-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCalendar, props);
});

module.exports = index;