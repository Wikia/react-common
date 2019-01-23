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
var IconCloseSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "24", height: "24", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconClose-a", d: "M22.083 23a.914.914 0 0 1-.648-.269l-9.485-9.485-9.385 9.385a.917.917 0 0 1-1.296-1.297l9.384-9.384L1.37 2.666a.917.917 0 0 1 1.297-1.297l9.284 9.283 9.384-9.383a.916.916 0 1 1 1.297 1.296l-9.385 9.385 9.485 9.485A.916.916 0 0 1 22.083 23" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconClose-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconClose = styled(IconCloseSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconClose.propTypes = {
  size: PropTypes.number
};
IconClose.defaultProps = {
  size: 24
}; // @component

module.exports = IconClose;
