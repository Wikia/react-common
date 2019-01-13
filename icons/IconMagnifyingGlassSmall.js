'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsMagnifyingGlassSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "g",
      { fillRule: "evenodd" },
      React.createElement("path", { d: "M16.984 16.025l-4.03-4.043a.713.713 0 0 0-1.011 0 .72.72 0 0 0 0 1.015l4.03 4.043c.279.28.732.28 1.011 0a.72.72 0 0 0 0-1.015z" }),
      React.createElement("path", { d: "M2.178 7.924c0-3.17 2.56-5.74 5.72-5.74 3.16 0 5.72 2.57 5.72 5.74 0 3.17-2.56 5.739-5.72 5.739-3.16 0-5.72-2.57-5.72-5.74zm-1.43 0c0 3.962 3.2 7.174 7.15 7.174s7.15-3.212 7.15-7.174S11.848.75 7.898.75.748 3.962.748 7.924z" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsMagnifyingGlassSmall;
