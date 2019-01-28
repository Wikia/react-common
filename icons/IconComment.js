'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconComment = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconComment-a", d: "M9 3c-1.603 0-3.11.624-4.243 1.757A5.961 5.961 0 0 0 3 9c0 3.309 2.691 6 6 6a1 1 0 0 1 1 1v3.586l4.293-4.293A.997.997 0 0 1 15 15c1.603 0 3.11-.624 4.243-1.757A5.961 5.961 0 0 0 21 9c0-3.309-2.691-6-6-6H9zm0 20a1 1 0 0 1-1-1v-5.062C4.059 16.443 1 13.072 1 9c0-2.137.832-4.146 2.343-5.657A7.946 7.946 0 0 1 9 1h6c4.411 0 8 3.589 8 8a7.948 7.948 0 0 1-2.343 5.657 7.934 7.934 0 0 1-5.232 2.331l-5.718 5.719A1 1 0 0 1 9 23z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconComment-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconComment, props);
});

module.exports = index;
