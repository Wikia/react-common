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
var IconMapTinySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "12", height: "12", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconMapTiny-a", d: "M10 9.22l-2 .499V2.782l2-.501V9.22zM2 2.721l2-.667v6.958c-.071 0-.138.011-.207.025-.037.009-.073.002-.109.015L2 9.613V2.721zm3-.333l1.684.561c.032.011.065.008.097.016.043.01.084.017.128.021.03.003.061.015.091.015v6.946L5 9.28V2.388zM11.615.212a.995.995 0 0 0-.858-.181L7.04.959 4.316.052C4.279.039 4.242.045 4.204.037A.99.99 0 0 0 4 .012a.998.998 0 0 0-.204.025c-.037.008-.075.002-.112.015l-3 1A.999.999 0 0 0 0 2v9a1 1 0 0 0 1.316.949L4 11.054l2.684.895a1 1 0 0 0 .316.052l.018-.003a.976.976 0 0 0 .225-.028l4-1A1 1 0 0 0 12 10V1c0-.307-.142-.598-.385-.788z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconMapTiny-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconMapTiny = styled(IconMapTinySvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconMapTiny.propTypes = {
  size: PropTypes.number
};
IconMapTiny.defaultProps = {
  size: 12
}; // @component

module.exports = IconMapTiny;
