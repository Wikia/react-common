'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsReplyArrowSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 18 18" }, props),
    React.createElement("path", { d: "M8.73 4.985V1.379a.38.38 0 0 0-.217-.347.352.352 0 0 0-.391.067L1.119 7.726a.388.388 0 0 0 0 .56l7.003 6.627c.106.1.26.128.39.067a.38.38 0 0 0 .218-.347v-3.589c5.166.246 7.555 5.675 7.579 5.731a.364.364 0 0 0 .408.217.376.376 0 0 0 .288-.37v-1.989c0-7.342-5.038-9.5-8.275-9.648", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsReplyArrowSmall;
