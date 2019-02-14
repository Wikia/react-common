'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconUsersTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconUsersTiny-a", d: "M4 5.998c2.206 0 4 1.794 4 4a1 1 0 0 1-2 0c0-1.103-.897-2-2-2s-2 .897-2 2a1 1 0 0 1-2 0c0-2.206 1.794-4 4-4zm4-2c2.206 0 4 1.794 4 4a1 1 0 0 1-2 0c0-1.103-.897-2-2-2a1 1 0 0 1 0-2zM4 5c-.26 0-.52-.11-.71-.29C3.11 4.52 3 4.26 3 4a1 1 0 0 1 .08-.38c.05-.12.12-.23.21-.33.23-.229.58-.34.91-.27.06.01.12.03.18.06.06.02.12.05.18.09.05.03.1.08.15.12.09.1.16.21.21.33A1 1 0 0 1 5 4c0 .26-.11.52-.29.71l-.15.12a.797.797 0 0 1-.18.09.669.669 0 0 1-.18.06c-.07.01-.13.02-.2.02zm4-2c-.26 0-.52-.11-.71-.29A1.05 1.05 0 0 1 7 2c0-.13.03-.26.08-.38s.12-.23.21-.33c.23-.23.58-.34.91-.269a.63.63 0 0 1 .18.058c.06.021.12.051.18.091.05.03.1.08.15.12.09.1.16.21.21.33.05.12.08.25.08.38 0 .26-.11.521-.29.71l-.15.12a.762.762 0 0 1-.18.09c-.06.03-.12.05-.18.06-.07.01-.13.02-.2.02z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconUsersTiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconUsersTiny, props);
});

module.exports = index;
