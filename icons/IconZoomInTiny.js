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
var IconZoomInTinySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "12", height: "12", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconZoomInTiny-a", d: "M4 9a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v1h1zm0-8a1 1 0 1 1 0 2H3v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1h2zm6 6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h1V8a1 1 0 0 1 1-1zm0-6a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3H8a1 1 0 1 1 0-2h2z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconZoomInTiny-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconZoomInTiny = styled(IconZoomInTinySvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconZoomInTiny.propTypes = {
  size: PropTypes.number
};
IconZoomInTiny.defaultProps = {
  size: 12
}; // @component

module.exports = IconZoomInTiny;
