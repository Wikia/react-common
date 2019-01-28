'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconTag = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "tag-a", d: "M22 10.586l-11 11L2.414 13l11-11H22v8.586zM23 0H13a1 1 0 0 0-.707.293l-12 12a.999.999 0 0 0 0 1.414l10 10a.997.997 0 0 0 1.414 0l12-12A.996.996 0 0 0 24 11V1a1 1 0 0 0-1-1zm-6 9c1.103 0 2-.896 2-2s-.897-2-2-2-2 .896-2 2 .897 2 2 2" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#tag-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconTag, props);
});

module.exports = index;
