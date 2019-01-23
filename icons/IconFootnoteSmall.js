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
var IconFootnoteSmallSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "18", height: "18", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconFootnoteSmall-a", d: "M8.005 10a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-1v7h1zM6.5 14.005c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.005 9V6a.999.999 0 0 1-.707-1.707l.999-.999.015-.015.002-.001A1.005 1.005 0 0 1 11.003 3h.008a1 1 0 0 1 .994.994V9a1 1 0 0 1-2 0zm6-8a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h1V3h-1a1 1 0 0 1 0-2h2zM1.5 14.005c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm10.01 0c.83 0 1.51.67 1.51 1.5s-.68 1.5-1.51 1.5-1.51-.67-1.51-1.5.68-1.5 1.51-1.5z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconFootnoteSmall-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconFootnoteSmall = styled(IconFootnoteSmallSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconFootnoteSmall.propTypes = {
  size: PropTypes.number
};
IconFootnoteSmall.defaultProps = {
  size: 18
}; // @component

module.exports = IconFootnoteSmall;
