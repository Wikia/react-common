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
var IconTrashSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "24", height: "24", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconTrash-a", d: "M16 19a1 1 0 0 0 1-1v-7a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1m-4 0a1 1 0 0 0 1-1v-7a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1m-4 0a1 1 0 0 0 1-1v-7a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1M7 2h10a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2M5 22h14V7H5v15zM22 5H2a1 1 0 1 0 0 2h1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7h1a1 1 0 1 0 0-2z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconTrash-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconTrash = styled(IconTrashSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconTrash.propTypes = {
  size: PropTypes.number
};
IconTrash.defaultProps = {
  size: 24
}; // @component

module.exports = IconTrash;
