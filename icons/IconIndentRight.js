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
var IconIndentRightSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "24", height: "24", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconIndentRight-a", d: "M1 1a1 1 0 0 0-1 1v20a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1m22.925 10.62a.983.983 0 0 0-.218-.327l-7-7a.999.999 0 1 0-1.414 1.414L20.586 11H7a1 1 0 1 0 0 2h13.586l-5.293 5.293a1 1 0 0 0 1.414 1.414l7-7a.983.983 0 0 0 .293-.704v-.006a.988.988 0 0 0-.075-.378" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconIndentRight-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconIndentRight = styled(IconIndentRightSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconIndentRight.propTypes = {
  size: PropTypes.number
};
IconIndentRight.defaultProps = {
  size: 24
}; // @component

module.exports = IconIndentRight;
