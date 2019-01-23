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
var IconCalendarSmallSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "18", height: "18", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconCalendarSmall-a", d: "M12.294 15.059h2.824v-1.883h-2.824v1.883zm-9.412 0h2.824v-1.883H2.882v1.883zM5.706 3.765v.94a.94.94 0 1 0 1.882 0v-.94h2.824v.94a.94.94 0 1 0 1.882 0v-.94h2.824v3.764H2.882V3.765h2.824zm6.588 7.53h2.824V9.411h-2.824v1.882zm-9.412 0h2.824V9.411H2.882v1.882zm4.706 3.764h2.824v-1.883H7.588v1.883zm0-3.765h2.824V9.412H7.588v1.882zm8.47-9.412h-3.764v-.94a.94.94 0 1 0-1.882 0v.94H7.588v-.94a.94.94 0 1 0-1.882 0v.94H1.94A.94.94 0 0 0 1 2.824V16c0 .52.422.941.941.941H16.06A.94.94 0 0 0 17 16V2.824a.94.94 0 0 0-.941-.942z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconCalendarSmall-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconCalendarSmall = styled(IconCalendarSmallSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconCalendarSmall.propTypes = {
  size: PropTypes.number
};
IconCalendarSmall.defaultProps = {
  size: 18
}; // @component

module.exports = IconCalendarSmall;
