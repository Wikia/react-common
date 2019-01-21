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
var IconParagraphSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "g",
      { id: "paragraph", fill: "none", fillRule: "evenodd" },
      React.createElement("path", { d: "M7.5 12a5.5 5.5 0 0 1 0-11H12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7.5zM11 3H7.5a3.5 3.5 0 0 0 0 7H11V3zm0 0c-1.333 0-1.333-2 0-2h11c1.333 0 1.333 2 0 2h-3v19c0 1.333-2 1.333-2 0V3h-4v19c0 1.333-2 1.333-2 0V3z", id: "Stroke-3", fill: "#000", fillRule: "nonzero" })
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
var IconParagraph = styled(IconParagraphSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconParagraph.propTypes = {
  size: PropTypes.number
};
IconParagraph.defaultProps = {
  size: 24
}; // @component

module.exports = IconParagraph;
