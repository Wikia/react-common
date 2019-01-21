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
var IconH3Svg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M9 2a1 1 0 0 0-1 1v8H2V3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0v-8h6v8a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1m10.095 6.32l4.612-4.613A1 1 0 0 0 23 2h-8a1 1 0 1 0 0 2h5.586l-4.293 4.293a.988.988 0 0 0-.293.704v.006a.998.998 0 0 0 .997.997H17c2.757 0 5 2.243 5 5s-2.243 5-5 5a4.842 4.842 0 0 1-1.657-.289 1 1 0 1 0-.685 1.88A6.84 6.84 0 0 0 17 22c3.86 0 7-3.142 7-7 0-3.132-2.065-5.789-4.905-6.68", id: "id-icons/IconH3-a" })
    ),
    React.createElement(
      "g",
      { id: "H3", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconH3-a" })
      ),
      React.createElement("use", { id: "icons/24px/H3", fill: "#000", xlinkHref: "#id-icons/IconH3-a" })
    )
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconH3 = styled(IconH3Svg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconH3.propTypes = {
  size: PropTypes.number
};
IconH3.defaultProps = {
  size: 24
}; // @component

module.exports = IconH3;
