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
var IconTrashOpenSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "24", height: "24", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconTrashOpen-a", d: "M20 8a1 1 0 0 0-1 1v12H5V10.763l15.406-6.847a1 1 0 0 0-.812-1.828l-15.95 7.09a.587.587 0 0 0-.097.043l-1.953.867a1 1 0 0 0 .812 1.828L3 11.65V22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M4.001 6a.987.987 0 0 0 .405-.086l9-4a1 1 0 0 0-.812-1.828l-9 4A1 1 0 0 0 4.001 6m11 5v6a1 1 0 1 0 2 0v-6a1 1 0 1 0-2 0m-4 1v5a1 1 0 1 0 2 0v-5a1 1 0 1 0-2 0m-4 1v4a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconTrashOpen-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconTrashOpen = styled(IconTrashOpenSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconTrashOpen.propTypes = {
  size: PropTypes.number
};
IconTrashOpen.defaultProps = {
  size: 24
}; // @component

module.exports = IconTrashOpen;
