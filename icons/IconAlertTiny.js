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
var IconAlertTinySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "12", height: "12", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconAlertTiny-a", d: "M7 9.993c0-.554-.447-1.004-1-1.004-.553 0-1 .45-1 1.004H2.618L6 3.203l3.382 6.79H7zm4.895.555L6.895.51c-.34-.68-1.45-.68-1.79 0l-5 10.038A1.002 1.002 0 0 0 1 12h10a1.002 1.002 0 0 0 .895-1.452zM5 5.978V6.98c0 .554.447 1.004 1 1.004.553 0 1-.45 1-1.004V5.978c0-.554-.447-1.004-1-1.004-.553 0-1 .45-1 1.004" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconAlertTiny-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconAlertTiny = styled(IconAlertTinySvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconAlertTiny.propTypes = {
  size: PropTypes.number
};
IconAlertTiny.defaultProps = {
  size: 12
}; // @component

module.exports = IconAlertTiny;
