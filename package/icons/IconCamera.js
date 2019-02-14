'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconCamera = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconCamera-a", d: "M2 4h2a1 1 0 1 0 0-2H2a1 1 0 1 0 0 2m19 17H3V8h2c.266 0 .52-.105.707-.293L9.414 4h5.172l3.707 3.707A.996.996 0 0 0 19 8h2v13zm1-15h-2.586l-3.707-3.707A.996.996 0 0 0 15 2H9a.996.996 0 0 0-.707.293L4.586 6H2a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-10 9c-1.103 0-2-.896-2-2s.897-2 2-2 2 .896 2 2-.897 2-2 2m0-6c-2.206 0-4 1.795-4 4s1.794 4 4 4 4-1.795 4-4-1.794-4-4-4" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconCamera-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconCamera, props);
});

module.exports = index;
