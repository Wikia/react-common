'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsArticle = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24" }, props),
    React.createElement("path", { fillRule: "evenodd", d: "M19 6a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2h12a1 1 0 0 0 1-1zm0 5a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2h12a1 1 0 0 0 1-1zm-8 5a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1zM23 1v15h-7a1 1 0 0 0-1 1v7H2a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1zm-6 17h5.414L17 23.414V18z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsArticle;
