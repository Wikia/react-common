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
var IconZoomOutTinySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "12", height: "12", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconZoomOutTiny-a", d: "M8 5a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2H8zM4 7a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V9H2a1 1 0 1 1 0-2h2zm0-6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1V2a1 1 0 0 1 1-1zm6 6a1 1 0 1 1 0 2H9v1a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1h2z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconZoomOutTiny-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconZoomOutTiny = styled(IconZoomOutTinySvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconZoomOutTiny.propTypes = {
  size: PropTypes.number
};
IconZoomOutTiny.defaultProps = {
  size: 12
}; // @component

module.exports = IconZoomOutTiny;
