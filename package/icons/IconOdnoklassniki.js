'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconOdnoklassniki = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M14.289 16.068c.33.319.618.598.909.875.644.613 1.296 1.22 1.934 1.84.67.65.694 1.557.071 2.176-.629.624-1.624.635-2.294-.01-.934-.9-1.844-1.823-2.794-2.764-.16.145-.26.23-.353.32-.812.778-1.625 1.554-2.432 2.337-.39.378-.837.626-1.408.576-.645-.056-1.113-.372-1.354-.953-.248-.598-.13-1.153.33-1.61.673-.672 1.372-1.318 2.061-1.974.267-.254.538-.503.863-.806-.214-.065-.356-.095-.486-.15-.806-.334-1.635-.629-2.407-1.024-.876-.449-1.114-1.383-.634-2.14.466-.734 1.412-.933 2.247-.475 2.342 1.285 4.684 1.284 7.025-.006.828-.456 1.78-.247 2.243.49.468.747.235 1.677-.618 2.116-.772.398-1.598.697-2.403 1.034-.135.057-.283.085-.5.148zM6.695 7.176c.01-2.858 2.419-5.131 5.422-5.118 2.925.013 5.31 2.344 5.29 5.171-.021 2.865-2.414 5.103-5.441 5.089-2.913-.013-5.282-2.325-5.271-5.142zm5.364-2.03c-1.191-.003-2.158.901-2.175 2.035-.017 1.114 1.009 2.1 2.177 2.093 1.164-.009 2.148-.957 2.154-2.077.005-1.123-.967-2.048-2.156-2.051z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconOdnoklassniki, props);
});

module.exports = index;
