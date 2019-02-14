'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconSoundOff = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconSoundOff-a", d: "M21.414 12l2.293-2.292a.999.999 0 1 0-1.414-1.414L20 10.587l-2.293-2.293a.999.999 0 1 0-1.414 1.414L18.586 12l-2.293 2.293a.999.999 0 1 0 1.414 1.414L20 13.415l2.293 2.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L21.414 12zM10 19.587l-4.293-4.293A1.002 1.002 0 0 0 5 15H2V9h3c.265 0 .52-.105.707-.293L10 4.414v15.172zm1.383-18.51a.998.998 0 0 0-1.09.217L4.586 7H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.586l5.707 5.707a.996.996 0 0 0 1.09.217A1 1 0 0 0 12 22V2c0-.404-.244-.769-.617-.924z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconSoundOff-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconSoundOff, props);
});

module.exports = index;
