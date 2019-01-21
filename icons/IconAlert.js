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
var IconAlertSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M11 9.956v4a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0m-8.382 12L12 3.192l9.382 18.764H2.618zm21.276.553l-11-22c-.339-.678-1.449-.678-1.789 0l-11 22A.999.999 0 0 0 1 23.956h22a.998.998 0 0 0 .894-1.447zm-11.888-5.563A1.01 1.01 0 0 0 11 17.95a1.01 1.01 0 0 0 1.006 1.005c.553 0 1.005-.453 1.005-1.005 0-.552-.452-1.005-1.005-1.005", id: "id-icons/IconAlert-a" })
    ),
    React.createElement(
      "g",
      { id: "alert", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconAlert-a" })
      ),
      React.createElement("use", { id: "icons/24px/Alert", fill: "#000", xlinkHref: "#id-icons/IconAlert-a" })
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
var IconAlert = styled(IconAlertSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconAlert.propTypes = {
  size: PropTypes.number
};
IconAlert.defaultProps = {
  size: 24
}; // @component

module.exports = IconAlert;
