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
var IconEyeSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M15 11.78c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3 3 1.35 3 3m-3 6.781c-4.4 0-8.35-2.71-9.93-6.78C3.65 7.71 7.6 5 12 5c4.4 0 8.35 2.71 9.93 6.781-1.58 4.07-5.53 6.78-9.93 6.78m11.94-7.11A12.67 12.67 0 0 0 12 3 12.67 12.67 0 0 0 .06 11.451c-.08.21-.08.45 0 .66A12.67 12.67 0 0 0 12 20.561a12.67 12.67 0 0 0 11.94-8.45c.08-.21.08-.45 0-.66", id: "id-icons/IconEye-a" })
    ),
    React.createElement(
      "g",
      { id: "eye", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconEye-a" })
      ),
      React.createElement("use", { id: "icons/24px/Eye", fill: "#000", xlinkHref: "#id-icons/IconEye-a" })
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
var IconEye = styled(IconEyeSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconEye.propTypes = {
  size: PropTypes.number
};
IconEye.defaultProps = {
  size: 24
}; // @component

module.exports = IconEye;
