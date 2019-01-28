'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconQuote = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "quote-a", d: "M19 20a3.004 3.004 0 0 1-2.995-3.172A3.003 3.003 0 0 1 19 14c1.654 0 3 1.346 3 3s-1.346 3-3 3m0-8a4.96 4.96 0 0 0-2.361.594c.975-3.457 3.036-6.535 5.972-8.803a1 1 0 1 0-1.222-1.582c-4.566 3.526-7.239 8.805-7.383 14.541A5.214 5.214 0 0 0 14 17v.241c0 .066.006.13.019.193A5.006 5.006 0 0 0 19 22c2.757 0 5-2.243 5-5s-2.243-5-5-5M5 20a3.004 3.004 0 0 1-2.995-3.172A3.003 3.003 0 0 1 5 14c1.654 0 3 1.346 3 3s-1.346 3-3 3m0-8a4.96 4.96 0 0 0-2.361.594c.975-3.457 3.036-6.535 5.972-8.803A1 1 0 1 0 7.389 2.21C2.823 5.735.15 11.014.006 16.75A5.214 5.214 0 0 0 0 17v.241c0 .066.006.13.019.193A5.006 5.006 0 0 0 5 22c2.757 0 5-2.243 5-5s-2.243-5-5-5" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#quote-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconQuote, props);
});

module.exports = index;
