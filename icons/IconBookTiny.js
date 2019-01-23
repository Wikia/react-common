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
var IconBookTinySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "12", height: "12", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconBookTiny-a", d: "M3.5 3C2.673 3 2 3.673 2 4.5v2.338c.91-.434 2.09-.434 3 0V4.5c0-.397-.159-.785-.437-1.063A1.513 1.513 0 0 0 3.5 3m5 3.5c.537 0 1.045.121 1.5.338V4.5c0-.397-.159-.785-.437-1.063A1.502 1.502 0 0 0 7 4.5v2.338A3.473 3.473 0 0 1 8.5 6.5M11 11a1 1 0 0 1-1-1c0-.827-.673-1.5-1.5-1.5S7 9.173 7 10a1 1 0 1 1-2 0c0-.827-.673-1.5-1.5-1.5S2 9.173 2 10a1 1 0 1 1-2 0V4.5a3.504 3.504 0 0 1 5.977-2.477l.026.027A3.489 3.489 0 0 1 8.5 1c.937 0 1.817.363 2.477 1.023A3.524 3.524 0 0 1 12 4.5V10a1 1 0 0 1-1 1" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconBookTiny-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconBookTiny = styled(IconBookTinySvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconBookTiny.propTypes = {
  size: PropTypes.number
};
IconBookTiny.defaultProps = {
  size: 12
}; // @component

module.exports = IconBookTiny;
