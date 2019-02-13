'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconQuestionSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconQuestionSmall-a", d: "M9 16c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7M9 0C4.037 0 0 4.037 0 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9m0 4a2.94 2.94 0 0 0-2.126.892.999.999 0 1 0 1.432 1.396A.957.957 0 0 1 9 6a1.001 1.001 0 0 1 0 2 1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-.185A2.993 2.993 0 0 0 12 7c0-1.654-1.346-3-3-3m.92 8.62a.84.84 0 0 0-.09-.18l-.12-.15c-.05-.04-.101-.08-.16-.12a.535.535 0 0 0-.17-.09.613.613 0 0 0-.19-.06 1.03 1.03 0 0 0-.9.27c-.181.19-.29.44-.29.71 0 .13.03.26.08.38.05.13.12.23.21.33.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.19-.02a.64.64 0 0 0 .19-.06c.06-.02.12-.05.17-.09.059-.03.11-.08.16-.12.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.2a.652.652 0 0 0-.06-.18" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconQuestionSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconQuestionSmall, props);
});

module.exports = index;