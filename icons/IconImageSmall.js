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
var IconImageSmallSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "18", height: "18", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconImageSmall-a", d: "M2.778 15.222v-4.61l2.666-2.666 4.35 4.35a.915.915 0 0 0 1.257 0l2.216-2.217 1.955 1.956v3.187H2.778zM15.222 2.778V9.52l-1.327-1.327a.915.915 0 0 0-1.257 0l-2.216 2.216-4.35-4.35a.915.915 0 0 0-1.256 0L2.778 8.1V2.778h12.444zM16.112 1H1.888A.89.89 0 0 0 1 1.889V16.11c0 .492.398.889.889.889H16.11c.49 0 .889-.397.889-.889V1.89A.89.89 0 0 0 16.111 1zm-5.779 6.222a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconImageSmall-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconImageSmall = styled(IconImageSmallSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconImageSmall.propTypes = {
  size: PropTypes.number
};
IconImageSmall.defaultProps = {
  size: 18
}; // @component

module.exports = IconImageSmall;
