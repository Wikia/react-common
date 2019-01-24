'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconTrash = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement(
      "g",
      { fillRule: "evenodd" },
      React.createElement("path", { d: "M18.417 21.167H5.583V6.5h12.834v14.667zM9.25 2.833h5.5v1.834h-5.5V2.833zm12.833 1.834h-5.5v-2.75A.916.916 0 0 0 15.667 1H8.333a.917.917 0 0 0-.916.917v2.75h-5.5a.917.917 0 0 0 0 1.833H3.75v15.583c0 .507.41.917.917.917h14.666c.507 0 .917-.41.917-.917V6.5h1.833a.916.916 0 1 0 0-1.833z" }),
      React.createElement("path", { d: "M12 9.25a.917.917 0 0 0-.917.917V17.5a.916.916 0 1 0 1.834 0v-7.333A.917.917 0 0 0 12 9.25m-3.667 0a.917.917 0 0 0-.916.917V17.5a.916.916 0 1 0 1.833 0v-7.333a.917.917 0 0 0-.917-.917m6.417.917V17.5a.916.916 0 1 0 1.833 0v-7.333a.916.916 0 1 0-1.833 0" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconTrash, props);
});

module.exports = index;
