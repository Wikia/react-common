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
var IconClipboardSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "24", height: "24", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconClipboard-a", d: "M7 3V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5zm0 2H3v16h18V5h-4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5zm3 10.586l6.293-6.293a1 1 0 0 1 1.414 1.414l-7 7a.997.997 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L10 15.586z" })
    ),
    React.createElement("use", { xlinkHref: "#id-icons/IconClipboard-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconClipboard = styled(IconClipboardSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconClipboard.propTypes = {
  size: PropTypes.number
};
IconClipboard.defaultProps = {
  size: 24
}; // @component

module.exports = IconClipboard;
