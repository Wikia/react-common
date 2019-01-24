'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconNumberedList = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M23 5H9a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 8H9a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 8H9a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2zM1.56 6.593V5.88l.774-.063c.126-.008.144-.045.144-.18V2.498c0-.108-.027-.163-.117-.19l-.783-.161.099-.739h2.16V5.64c0 .144.01.17.144.18l.739.062v.712H1.56zm-.469 8.067v-.837l1.207-1.18c.91-.882 1.296-1.241 1.296-1.755 0-.333-.162-.576-.639-.576-.495 0-.702.162-.702.802l-1.225-.109c.01-1.431 1.099-1.665 2.044-1.665 1.395 0 1.89.594 1.89 1.44 0 .847-.584 1.405-1.242 2.035l-1.017.972h1.324c.09 0 .126-.018.144-.108l.126-.711h.954v1.692H1.09zm3.039 5.241c.765.117 1.188.576 1.188 1.386 0 1.189-.89 1.747-2.178 1.747-.91 0-1.72-.324-2.18-.828l.721-.792c.342.333.72.594 1.35.594.505 0 .937-.18.937-.81 0-.55-.342-.775-.9-.775a3.69 3.69 0 0 0-.667.063v-.9l.442-.054c.648-.081.999-.396.999-.972 0-.342-.153-.621-.658-.621-.485 0-.72.162-.72.801l-1.233-.108c0-1.423 1.072-1.666 2.017-1.666 1.386 0 1.917.531 1.917 1.495 0 .756-.468 1.233-1.035 1.404v.036z", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconNumberedList, props);
});

module.exports = index;
