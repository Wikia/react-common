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
var IconLockSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M10 15h1v3a1 1 0 1 0 2 0v-3h1a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2m-5 7h14V10H5v12zM9 5c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V5zm11 3h-3V5c0-2.757-2.243-5-5-5S7 2.243 7 5v3H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z", id: "id-icons/IconLock-a" })
    ),
    React.createElement(
      "g",
      { id: "lock", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconLock-a" })
      ),
      React.createElement("use", { id: "icons/24px/Padlock", fill: "#000", xlinkHref: "#id-icons/IconLock-a" })
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
var IconLock = styled(IconLockSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconLock.propTypes = {
  size: PropTypes.number
};
IconLock.defaultProps = {
  size: 24
}; // @component

module.exports = IconLock;
