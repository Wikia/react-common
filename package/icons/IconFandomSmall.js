'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconFandomSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/icons/IconFandomSmall-a", d: "M16.643 8.488c0 .15-.06.293-.165.4l-6.962 6.986a.516.516 0 0 1-.384.168.553.553 0 0 1-.4-.169l-.49-.462a.214.214 0 0 1-.005-.307l8.034-8.048a.218.218 0 0 1 .372.152v1.28zm-8.927 5.268l-.399.356a.333.333 0 0 1-.453-.01L1.565 8.924a.691.691 0 0 1-.208-.494v-.968c0-.348.424-.524.675-.28l5.624 5.499c.098.096.263.296.263.537a.745.745 0 0 1-.203.538zM2.98 3.734l1.823-1.803a.22.22 0 0 1 .307 0l6.104 6.04a1.644 1.644 0 0 1 0 2.343l-1.821 1.802a.22.22 0 0 1-.308 0L2.98 6.076a1.635 1.635 0 0 1-.487-1.172c0-.443.173-.859.486-1.17zm7.223 1.033l1.904-1.885c.372-.367.888-.54 1.424-.467.375.052.716.245.984.51l1.928 1.908a.214.214 0 0 1 0 .305L13.51 8.041a.22.22 0 0 1-.307 0l-3-2.97a.214.214 0 0 1 0-.304zm7.573-.358L13.528.133a.452.452 0 0 0-.638-.001L9.52 3.498a.673.673 0 0 1-.945.002L5.205.17a.452.452 0 0 0-.632-.003L.233 4.4A.768.768 0 0 0 0 4.95v4.008c0 .205.082.401.229.546l8.458 8.367a.452.452 0 0 0 .634 0l8.45-8.367A.768.768 0 0 0 18 8.957V4.95a.769.769 0 0 0-.224-.542z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/icons/IconFandomSmall-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconFandomSmall, props);
});

module.exports = index;
