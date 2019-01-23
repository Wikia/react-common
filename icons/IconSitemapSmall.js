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
var IconSitemapSmallSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "18", height: "18", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconSitemapSmall-a", d: "M2 14a1 1 0 0 0 1-1v-3h5v3a1 1 0 1 0 2 0v-3h5v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1h-6V5a1 1 0 1 0-2 0v3H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1M8 2h2a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2M3 16H1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2m14 0h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2m-7 0H8a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconSitemapSmall-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconSitemapSmall = styled(IconSitemapSmallSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconSitemapSmall.propTypes = {
  size: PropTypes.number
};
IconSitemapSmall.defaultProps = {
  size: 18
}; // @component

module.exports = IconSitemapSmall;
