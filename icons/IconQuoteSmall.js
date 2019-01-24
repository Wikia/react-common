'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconQuoteSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M7.287 10.334c-1.113-1.03-2.939-1.248-4.257-.22-.113-.929-.024-1.781.291-2.544.966-2.335 3.684-3.147 3.713-3.155a.72.72 0 0 0 .497-.892.732.732 0 0 0-.901-.496 7.51 7.51 0 0 0-1.208.493c-1.637.786-4.144 2.662-4.392 6.765a9.57 9.57 0 0 0-.022.48c0 .062-.008.117-.008.179v.053c0 .182.007.363.02.543l.002.024c.012.17.029.337.052.503l.008.057C1.395 14.276 2.633 16 4.94 16a3.304 3.304 0 0 0 2.853-1.6c.72-1.189.623-3.023-.505-4.066zm8.746 0c-1.114-1.03-2.94-1.248-4.258-.22-.112-.929-.023-1.781.292-2.544.965-2.335 3.684-3.147 3.712-3.155a.72.72 0 0 0 .497-.892.732.732 0 0 0-.9-.496 7.51 7.51 0 0 0-1.209.493c-1.636.786-4.143 2.662-4.392 6.765a9.57 9.57 0 0 0-.021.48c-.001.062-.008.117-.008.179v.053c0 .182.007.363.02.543l.001.024c.012.17.03.337.052.503l.009.057C10.14 14.276 11.378 16 13.685 16a3.304 3.304 0 0 0 2.853-1.6c.72-1.189.622-3.023-.505-4.066z", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconQuoteSmall, props);
});

module.exports = index;
