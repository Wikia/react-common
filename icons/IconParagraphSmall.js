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
var IconParagraphSmallSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "18", height: "18", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconParagraphSmall-a", d: "M12 16V3H8C6.667 3 6.667 1 8 1h8c1.333 0 1.333 2 0 2h-2v13c0 1.333-2 1.333-2 0zm-5 0V8c0-1.333 2-1.333 2 0v8c0 1.333-2 1.333-2 0zM7 3H5a2 2 0 1 0 0 4h2V3zM5 1h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a4 4 0 1 1 0-8z" })
    ),
    React.createElement("use", { xlinkHref: "#id-icons/IconParagraphSmall-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconParagraphSmall = styled(IconParagraphSmallSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconParagraphSmall.propTypes = {
  size: PropTypes.number
};
IconParagraphSmall.defaultProps = {
  size: 18
}; // @component

module.exports = IconParagraphSmall;
