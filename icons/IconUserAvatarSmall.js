'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));
var PropTypes = _interopDefault(require('prop-types'));

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconUserAvatarSmallSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "18", height: "18", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconUserAvatarSmall-a", d: "M13.05 14.704c-2.368 1.673-5.74 1.672-8.105-.003l-.073-.053A5.921 5.921 0 0 1 9 13a5.92 5.92 0 0 1 4.127 1.648l-.077.056M9 2c3.86 0 7 3.141 7 7a6.965 6.965 0 0 1-1.449 4.257A7.895 7.895 0 0 0 9 11a7.89 7.89 0 0 0-5.551 2.257A6.961 6.961 0 0 1 2 9c0-3.859 3.14-7 7-7m9 7c0-4.963-4.038-9-9-9-4.963 0-9 4.037-9 9 0 2.455.974 4.755 2.748 6.481a8.996 8.996 0 0 0 7.122 2.477 8.996 8.996 0 0 0 5.382-2.477v-.001l.005-.004A8.968 8.968 0 0 0 18 9M9 6c.55 0 1 .449 1 1 0 .55-.45 1-1 1-.551 0-1-.45-1-1 0-.551.449-1 1-1m0 4c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconUserAvatarSmall-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconUserAvatarSmall = styled(IconUserAvatarSmallSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconUserAvatarSmall.propTypes = {
  size: PropTypes.number
};
IconUserAvatarSmall.defaultProps = {
  size: 18
}; // @component

module.exports = IconUserAvatarSmall;
