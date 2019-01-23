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
var IconUsersSmallSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "18", height: "18", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconUsersSmall-a", d: "M6 8c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2m0 2c-3.309 0-6 2.691-6 6a1 1 0 1 0 2 0c0-2.206 1.794-4 4-4s4 1.794 4 4a1 1 0 1 0 2 0c0-3.309-2.691-6-6-6m6-5c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2m0 2a1 1 0 1 0 0 2c2.206 0 4 1.794 4 4a1 1 0 1 0 2 0c0-3.309-2.691-6-6-6" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconUsersSmall-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconUsersSmall = styled(IconUsersSmallSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconUsersSmall.propTypes = {
  size: PropTypes.number
};
IconUsersSmall.defaultProps = {
  size: 18
}; // @component

module.exports = IconUsersSmall;
