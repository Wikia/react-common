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
var IconCheckSmallSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "18", height: "18", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconCheckSmall-a", d: "M6 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 1 1 1.414-1.414L6 13.586 16.293 3.293a.999.999 0 1 1 1.414 1.414l-11 11A.997.997 0 0 1 6 16" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconCheckSmall-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconCheckSmall = styled(IconCheckSmallSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconCheckSmall.propTypes = {
  size: PropTypes.number
};
IconCheckSmall.defaultProps = {
  size: 18
}; // @component

module.exports = IconCheckSmall;
