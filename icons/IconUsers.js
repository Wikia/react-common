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
var IconUsersSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M16 10a1 1 0 1 0 0 2c3.309 0 6 2.691 6 6a1 1 0 1 0 2 0c0-4.411-3.589-8-8-8m-5-1c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3 3 1.35 3 3m8-4c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3 3 1.35 3 3M8 14c-4.411 0-8 3.589-8 8a1 1 0 1 0 2 0c0-3.309 2.691-6 6-6s6 2.691 6 6a1 1 0 1 0 2 0c0-4.411-3.589-8-8-8", id: "id-icons/IconUsers-a" })
    ),
    React.createElement(
      "g",
      { id: "users", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconUsers-a" })
      ),
      React.createElement("use", { id: "icons/24px/Users", fill: "#000", xlinkHref: "#id-icons/IconUsers-a" })
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
var IconUsers = styled(IconUsersSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconUsers.propTypes = {
  size: PropTypes.number
};
IconUsers.defaultProps = {
  size: 24
}; // @component

module.exports = IconUsers;
