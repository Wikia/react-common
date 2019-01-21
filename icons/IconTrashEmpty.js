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
var IconTrashEmptySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "18", height: "18", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "g",
      { id: "trash-empty", fill: "none", fillRule: "evenodd" },
      React.createElement("path", { d: "M6 10a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0v-3zM4 4a1 1 0 0 1-.371-1.929l5-2a1 1 0 0 1 .742 1.858l-5 2a1.006 1.006 0 0 1-.371.07zm6 5a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V9zm5-3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1-.383-1.924l12.935-5.357a1 1 0 0 1 .765 1.847L4 8.253v7.745h10V7a1 1 0 0 1 1-1z", id: "Fill-8", fill: "#000" })
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
var IconTrashEmpty = styled(IconTrashEmptySvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconTrashEmpty.propTypes = {
  size: PropTypes.number
};
IconTrashEmpty.defaultProps = {
  size: 24
}; // @component

module.exports = IconTrashEmpty;
