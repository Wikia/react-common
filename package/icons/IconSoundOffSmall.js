'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconSoundOffSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconSoundOffSmall-a", d: "M7 13.587l-2.293-2.293A1.002 1.002 0 0 0 4 11H2V7h2c.265 0 .52-.105.707-.293L7 4.415v9.172zm1.383-12.51c.373.155.617.52.617.924v14a1 1 0 0 1-1.707.707L3.586 13H1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.586l3.707-3.707a.996.996 0 0 1 1.09-.217zM16.414 9l1.293 1.293a.999.999 0 1 1-1.414 1.414L15 10.415l-1.293 1.293a.999.999 0 1 1-1.414-1.414L13.586 9l-1.293-1.293a.999.999 0 1 1 1.414-1.414L15 7.587l1.293-1.293a.999.999 0 1 1 1.414 1.414L16.414 9z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconSoundOffSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconSoundOffSmall, props);
});

module.exports = index;
