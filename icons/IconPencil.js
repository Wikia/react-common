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
var IconPencilSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M2 15.164l8.625-8.625 6.836 6.836L8.836 22H2v-6.836zm16.875-3.203l-6.836-6.836 2.711-2.71 6.836 6.835-2.711 2.711zm4.832-3.418l-8.25-8.25a.999.999 0 0 0-1.414 0L.294 14.043A1 1 0 0 0 0 14.75V23a1 1 0 0 0 1 1h8.25a1 1 0 0 0 .708-.294L23.707 9.957a.999.999 0 0 0 0-1.414z", id: "id-icons/IconPencil-a" })
    ),
    React.createElement(
      "g",
      { id: "pencil", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconPencil-a" })
      ),
      React.createElement("use", { fill: "#000", xlinkHref: "#id-icons/IconPencil-a" })
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
var IconPencil = styled(IconPencilSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconPencil.propTypes = {
  size: PropTypes.number
};
IconPencil.defaultProps = {
  size: 24
}; // @component

module.exports = IconPencil;
