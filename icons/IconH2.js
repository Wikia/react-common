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
var IconH2Svg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M9 2a1 1 0 0 0-1 1v8H2V3a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0v-8h6v8a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1m14 18h-6.934c.331-2.394 1.857-3.729 3.593-5.248C21.693 12.973 24 10.953 24 7c0-2.757-2.243-5-5-5s-5 2.243-5 5a1 1 0 1 0 2 0c0-1.654 1.346-3 3-3s3 1.346 3 3c0 3.047-1.695 4.529-3.659 6.248C16.307 15.027 14 17.047 14 21a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2", id: "id-icons/IconH2-a" })
    ),
    React.createElement(
      "g",
      { id: "H2", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconH2-a" })
      ),
      React.createElement("use", { id: "icons/24px/H2", fill: "#000", xlinkHref: "#id-icons/IconH2-a" })
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
var IconH2 = styled(IconH2Svg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconH2.propTypes = {
  size: PropTypes.number
};
IconH2.defaultProps = {
  size: 24
}; // @component

module.exports = IconH2;
