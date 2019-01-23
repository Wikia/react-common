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
var IconBookSmallSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "18", height: "18", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconBookSmall-a", d: "M13 1c2.762 0 5 2.238 5 5v10h-2c0-1.658-1.342-3-3-3-.801 0-1.558.32-2.118.872A3.024 3.024 0 0 0 10 16H8V6c0-1.335.532-2.594 1.468-3.542A5.023 5.023 0 0 1 13 1zm5 15c0 1.333-2 1.333-2 0v-4c1.215.911 2 2.364 2 4zM16 6c0-1.658-1.342-3-3-3-.801 0-1.558.32-2.118.872A3.024 3.024 0 0 0 10 6v6a5.005 5.005 0 0 1 6 0V6zm-6 10c0 1.333-2 1.333-2 0 0-1.335.532-2.594 1.468-3.542.167-.165.345-.318.532-.458v4zM8 6c0-1.658-1.342-3-3-3-.801 0-1.558.32-2.118.872A3.024 3.024 0 0 0 2 6v6a5.005 5.005 0 0 1 6 0V6zm2 0v10c0 1.333-2 1.333-2 0 0-1.658-1.342-3-3-3-.801 0-1.558.32-2.118.872A3.024 3.024 0 0 0 2 16c0 1.333-2 1.333-2 0V6c0-1.335.532-2.594 1.468-3.542A5.023 5.023 0 0 1 5 1c2.762 0 5 2.238 5 5z" })
    ),
    React.createElement("use", { xlinkHref: "#id-icons/IconBookSmall-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconBookSmall = styled(IconBookSmallSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconBookSmall.propTypes = {
  size: PropTypes.number
};
IconBookSmall.defaultProps = {
  size: 18
}; // @component

module.exports = IconBookSmall;
