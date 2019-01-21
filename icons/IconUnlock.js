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
var IconUnlockSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M10 15h1v3a1 1 0 1 0 2 0v-3h1a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2m-5 7h14V10H5v12zM20 8H9V5c0-1.654 1.346-3 3-3 .795 0 1.551.313 2.128.882a1 1 0 1 0 1.404-1.424A5.006 5.006 0 0 0 12 0C9.243 0 7 2.243 7 5v3H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z", id: "id-icons/IconUnlock-a" })
    ),
    React.createElement(
      "g",
      { id: "unlock", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconUnlock-a" })
      ),
      React.createElement("use", { id: "icons/24px/Open-Padlock", fill: "#000", xlinkHref: "#id-icons/IconUnlock-a" })
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
var IconUnlock = styled(IconUnlockSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconUnlock.propTypes = {
  size: PropTypes.number
};
IconUnlock.defaultProps = {
  size: 24
}; // @component

module.exports = IconUnlock;
