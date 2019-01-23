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
var IconTwitterTinySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "12", height: "12", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconTwitterTiny-a", d: "M10.737 4.213v.295C10.737 7.533 8.289 11 3.789 11 2.37 11 1.105 10.631 0 9.967c.237 0 .395.074.632.074 1.105 0 2.21-.369 3.079-.959-1.027 0-1.974-.664-2.29-1.623.158 0 .316.074.474.074.237 0 .237 0 .552-.074-1.184-.221-2.21-1.18-2.21-2.287 0 .221.868.221 1.263.295C.868 5.025.474 4.361.474 3.55c0-.442.158-.811.394-1.18 1.185 1.401 3.08 2.287 5.053 2.434-.079-.221-.079-.369-.079-.516C5.842 3.033 6.947 2 8.29 2c.711 0 1.343.221 1.816.738.553-.148 1.027-.295 1.5-.59-.237.59-.631.959-1.026 1.254A7.885 7.885 0 0 0 12 3.032c-.395.443-.79.886-1.263 1.181z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconTwitterTiny-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconTwitterTiny = styled(IconTwitterTinySvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconTwitterTiny.propTypes = {
  size: PropTypes.number
};
IconTwitterTiny.defaultProps = {
  size: 12
}; // @component

module.exports = IconTwitterTiny;
