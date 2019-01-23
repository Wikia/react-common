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
var IconH3TinySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "12", height: "12", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconH3Tiny-a", d: "M5 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7H2v4a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v4h2V1a1 1 0 0 1 1-1zm6.964 1.177c-.012.065-.01.131-.036.195L10.476 5H11a1 1 0 0 1 1 1v2c0 2.206-1.794 4-4 4a1 1 0 1 1 0-2c1.102 0 2-.897 2-2V7H9a1.001 1.001 0 0 1-.929-1.372L9.522 2H8a1 1 0 1 1 0-2h3c.068 0 .127.026.191.038.06.012.121.01.18.034l.008.004c.097.04.18.103.257.169.021.018.05.028.07.046.056.058.092.131.134.2.025.04.061.074.08.117.012.031.01.067.021.099.028.093.056.186.057.284L12 1c0 .063-.025.117-.036.177z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconH3Tiny-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconH3Tiny = styled(IconH3TinySvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconH3Tiny.propTypes = {
  size: PropTypes.number
};
IconH3Tiny.defaultProps = {
  size: 12
}; // @component

module.exports = IconH3Tiny;
