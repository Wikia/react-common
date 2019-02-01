'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconSoundSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconSoundSmall-a", d: "M7 13.587l-2.293-2.293A1.002 1.002 0 0 0 4 11H2V7h2c.265 0 .52-.105.707-.293L7 4.415v9.172zm1.383-12.51c.373.155.617.52.617.924v14a1 1 0 0 1-1.707.707L3.586 13H1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.586l3.707-3.707a.996.996 0 0 1 1.09-.217zm4.837 4.488c.518 1.07.78 2.227.78 3.436a7.818 7.818 0 0 1-.78 3.435 1 1 0 1 1-1.8-.87c.384-.798.58-1.66.58-2.565s-.196-1.768-.58-2.565a1 1 0 0 1 1.8-.87zm2.041-4.201a12.013 12.013 0 0 1 0 15.273.993.993 0 0 1-.77.364 1 1 0 0 1-.771-1.637A10.007 10.007 0 0 0 16 9.001c0-2.324-.81-4.583-2.28-6.364a1.002 1.002 0 0 1 .134-1.408 1 1 0 0 1 1.407.135z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconSoundSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconSoundSmall, props);
});

module.exports = index;