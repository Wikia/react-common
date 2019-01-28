'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconEyeCrossedTiny = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "eye-off-tiny", d: "M2.124 6c.071-.272.178-.528.301-.773.034-.069.073-.134.111-.2a4.12 4.12 0 0 1 .364-.532c.028-.033.052-.068.08-.1l2.287 2.286.023.03c.005.003.011.005.016.01l2.041 2.04-.018.01c-.137.046-.28.078-.424.111-.075.018-.147.045-.223.058C6.46 8.98 6.232 9 6 9a4.02 4.02 0 0 1-3.876-3m7.752 0a4 4 0 0 1-.3.772c-.035.07-.074.136-.113.204a4.047 4.047 0 0 1-.36.526c-.029.034-.054.07-.083.103l-2.3-2.3c-.005-.004-.006-.01-.01-.015-.006-.006-.013-.008-.019-.014L4.653 3.238l.017-.007c.14-.049.284-.08.428-.114.074-.017.145-.044.22-.057C5.541 3.021 5.77 3 6 3a4.022 4.022 0 0 1 3.876 3m1.831 4.293l-1.266-1.266c.015-.015.026-.033.04-.048.045-.052.084-.109.128-.163a5.78 5.78 0 0 0 .428-.577 6.02 6.02 0 0 0 .455-.853c.038-.088.08-.172.113-.262a6.03 6.03 0 0 0 .274-.91.99.99 0 0 0 .021-.203v-.02a.983.983 0 0 0-.02-.203A6.028 6.028 0 0 0 6 1a5.896 5.896 0 0 0-1.192.132c-.236.05-.466.11-.692.186-.07.024-.142.042-.212.07-.26.097-.517.21-.76.341L1.707.293A.999.999 0 1 0 .293 1.707L1.56 2.974c-.014.014-.025.032-.039.047-.047.053-.087.112-.132.166a6.098 6.098 0 0 0-.424.573 6.218 6.218 0 0 0-.455.852c-.039.09-.08.175-.114.266a5.765 5.765 0 0 0-.274.91 1.179 1.179 0 0 0-.02.223.99.99 0 0 0 .02.202A6.026 6.026 0 0 0 6.001 11a5.896 5.896 0 0 0 1.191-.132c.235-.049.466-.11.691-.185.071-.025.143-.044.213-.07.261-.098.517-.21.76-.342l1.437 1.436a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#eye-off-tiny" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconEyeCrossedTiny, props);
});

module.exports = index;
