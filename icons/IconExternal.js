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
var IconExternalSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M10 15a.999.999 0 0 1-.707-1.707L19.586 3H14a1 1 0 1 1 0-2h8.003a.988.988 0 0 1 .704.293.998.998 0 0 1 .293.704V10a1 1 0 1 1-2 0V4.414L10.707 14.707A.997.997 0 0 1 10 15m8 8H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H3v14h14v-8a1 1 0 1 1 2 0v9a1 1 0 0 1-1 1", id: "id-icons/IconExternal-a" })
    ),
    React.createElement(
      "g",
      { id: "external-link", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconExternal-a" })
      ),
      React.createElement("use", { id: "icons/24px/External-Link", fill: "#000", xlinkHref: "#id-icons/IconExternal-a" })
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
var IconExternal = styled(IconExternalSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconExternal.propTypes = {
  size: PropTypes.number
};
IconExternal.defaultProps = {
  size: 24
}; // @component

module.exports = IconExternal;
