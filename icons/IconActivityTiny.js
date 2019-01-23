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
var IconActivityTinySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "12", height: "12", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconActivityTiny-a", d: "M8 12.001a.87.87 0 0 1-.349-.063l-.002-.001a.365.365 0 0 1-.035-.014l-.002-.001a.986.986 0 0 1-.541-.55L3.993 3.676 2.988 6.149A.999.999 0 0 1 2 7h-.008a.352.352 0 0 1-.046 0H1a1 1 0 1 1 0-2h.296L3.072.626l.005-.011V.613A.996.996 0 0 1 4.005 0c.114.001.23.021.343.063h.002l.035.014a.986.986 0 0 1 .543.552l3.078 7.696 1.005-2.473A1 1 0 0 1 10 5h1a1 1 0 0 1 0 2h-.297l-1.776 4.375-.005.011v.001a1.005 1.005 0 0 1-.922.614" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconActivityTiny-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconActivityTiny = styled(IconActivityTinySvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconActivityTiny.propTypes = {
  size: PropTypes.number
};
IconActivityTiny.defaultProps = {
  size: 12
}; // @component

module.exports = IconActivityTiny;
