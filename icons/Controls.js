'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var wdsIconsControls = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M12.494 6H22.5a.5.5 0 0 0 0-1H12.494a.5.5 0 0 0 0 1M1.5 13h11.994v1.482c0 .29.235.526.525.526h2.947c.29 0 .526-.236.526-.526v-3.956a.526.526 0 0 0-.526-.526h-2.947a.525.525 0 0 0-.525.526V12H1.5a.5.5 0 0 0 0 1m21 5.998H12.494a.5.5 0 0 0 0 1H22.5a.5.5 0 0 0 0-1M1.5 6h2.998v1.48c0 .29.235.526.526.526H7.97a.526.526 0 0 0 .526-.526V3.526A.525.525 0 0 0 7.97 3H5.024a.525.525 0 0 0-.526.526V5H1.5a.5.5 0 0 0 0 1m20.99 6h-2.003a.5.5 0 0 0 0 1h2.003a.5.5 0 0 0 0-1M7.97 17H5.023a.525.525 0 0 0-.525.526V19H1.5a.5.5 0 1 0 0 1h2.998v1.47c0 .29.235.526.525.526H7.97c.29 0 .526-.236.526-.526v-3.944A.526.526 0 0 0 7.97 17" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

module.exports = wdsIconsControls;
