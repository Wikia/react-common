'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconImages = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconImages-a", d: "M12 14c1.103 0 2-.896 2-2s-.897-2-2-2-2 .896-2 2 .897 2 2 2m4 7h-1.586L3 9.586V8h13v13zM3 21v-8.586L11.586 21H3zM17 6H2a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm5-5H7a1 1 0 1 0 0 2h14v14a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconImages-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconImages, props);
});

module.exports = index;
