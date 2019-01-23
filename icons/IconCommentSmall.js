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
var IconCommentSmallSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "18", height: "18", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconCommentSmall-a", d: "M7 3C4.794 3 3 4.795 3 7c0 1.062.418 2.064 1.177 2.822A3.966 3.966 0 0 0 7 11a1 1 0 0 1 1 1v1.586l2.293-2.293A.997.997 0 0 1 11 11c2.206 0 4-1.795 4-4a3.97 3.97 0 0 0-1.177-2.823A3.97 3.97 0 0 0 11 3H7zm0 14a1 1 0 0 1-1-1v-3.084a5.96 5.96 0 0 1-3.237-1.68A5.951 5.951 0 0 1 1 7c0-3.309 2.691-6 6-6h4c1.595 0 3.1.626 4.237 1.762A5.96 5.96 0 0 1 17 7a6.007 6.007 0 0 1-5.571 5.984l-3.722 3.723A1 1 0 0 1 7 17z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconCommentSmall-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconCommentSmall = styled(IconCommentSmallSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconCommentSmall.propTypes = {
  size: PropTypes.number
};
IconCommentSmall.defaultProps = {
  size: 18
}; // @component

module.exports = IconCommentSmall;
