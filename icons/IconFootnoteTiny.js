'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconFootnoteTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconFootnoteTiny-a", d: "M1.71 10.29c.09.1.16.21.21.33.05.119.08.25.08.38 0 .26-.11.52-.29.71l-.15.119a.762.762 0 0 1-.18.091c-.06.03-.12.05-.18.059-.07.01-.13.021-.2.021-.26 0-.52-.11-.71-.29C.11 11.52 0 11.26 0 11c0-.13.03-.261.08-.38.05-.12.12-.23.21-.33.23-.23.58-.34.91-.27.06.01.12.03.18.059.06.021.12.051.18.091.05.03.1.08.15.12zm2.58 0c.37-.37 1.04-.37 1.42 0 .18.189.29.449.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.261.11-.521.29-.71zm4 0c.38-.37 1.04-.37 1.42 0 .18.189.29.449.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.261.11-.521.29-.71zM5 7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2v4a1 1 0 0 1 1 1zm6-7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2V2a1 1 0 0 1 0-2h1zM7 6V4H6V2h2v4H7z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconFootnoteTiny-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconFootnoteTiny, props);
});

module.exports = index;
