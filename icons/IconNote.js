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
var IconNoteSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "24", height: "24", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconNote-a", d: "M13 16v4.586L17.586 16H13zm-8 6h6v-7a1 1 0 0 1 1-1h7V2H5v20zm7 2H4a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v13.992c0 .043-.002.086-.007.128.001.001-.001.001-.001.001v.008a1.19 1.19 0 0 1-.023.119l-.001.002-.001.006-.001.002v.001a1 1 0 0 1-.254.444l-.002.002h-.001l-.002.002-8 8a.007.007 0 0 1-.003.003l-.003.003H12.7a.995.995 0 0 1-.435.252h-.004a.885.885 0 0 1-.136.027h-.004c-.001 0 .006.002-.004.001l-.003.001A1.088 1.088 0 0 1 12 24z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconNote-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconNote = styled(IconNoteSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconNote.propTypes = {
  size: PropTypes.number
};
IconNote.defaultProps = {
  size: 24
}; // @component

module.exports = IconNote;
