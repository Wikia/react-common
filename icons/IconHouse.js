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
var IconHouseSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "12", height: "12", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "g",
      { id: "home", fill: "none", fillRule: "evenodd" },
      React.createElement("path", { d: "M9 10h1V6.414l-4-4-4 4V10h1V9c0-1.654 1.346-3 3-3s3 1.346 3 3v1zm2 2H8a1 1 0 0 1-1-1V9c0-.55-.449-1-1-1-.551 0-1 .45-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V6c0-.265.105-.52.293-.707l5-5a.999.999 0 0 1 1.414 0l5 5A.997.997 0 0 1 12 6v5a1 1 0 0 1-1 1z", id: "Fill-1", fill: "#000" })
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
var IconHouse = styled(IconHouseSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconHouse.propTypes = {
  size: PropTypes.number
};
IconHouse.defaultProps = {
  size: 24
}; // @component

module.exports = IconHouse;
