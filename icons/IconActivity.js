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
var IconActivitySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "24", height: "24", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconActivity-a", d: "M16 23c-.409 0-.776-.249-.929-.629L8 4.692l-3.071 7.679c-.153.38-.52.629-.929.629H1a1 1 0 1 1 0-2h2.323l3.748-9.371a1.002 1.002 0 0 1 1.858 0L16 19.308l3.071-7.679c.153-.38.52-.629.929-.629h3a1 1 0 1 1 0 2h-2.323l-3.748 9.371c-.153.38-.52.629-.929.629" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconActivity-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconActivity = styled(IconActivitySvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconActivity.propTypes = {
  size: PropTypes.number
};
IconActivity.defaultProps = {
  size: 24
}; // @component

module.exports = IconActivity;
