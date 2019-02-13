'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconNumberedListSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconNumberedListSmall-a", d: "M3.688 15a.5.5 0 0 1 0 1H1.5a.5.5 0 0 1-.5-.5c0-1.207.635-1.842 1.147-2.354.477-.476.854-.853.854-1.646a.5.5 0 0 0-1 0A.5.5 0 0 1 1 11.5c0-.826.673-1.5 1.5-1.5.828 0 1.5.674 1.5 1.5 0 1.207-.635 1.844-1.147 2.354-.364.365-.67.67-.794 1.147h1.628zM1.853 3.854a.5.5 0 0 1-.706-.707l1-1A.5.5 0 1 1 3 2.5v5a.499.499 0 1 1-1 0V3.708l-.147.146zM7 4a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2H7zm9 4a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h9zm0 6a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h9z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconNumberedListSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconNumberedListSmall, props);
});

module.exports = index;