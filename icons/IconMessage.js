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
var IconMessageSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M18 10H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2m4 2c0 1.654-1.346 3-3 3h-6a.997.997 0 0 0-.707.293L7 20.586V16a1 1 0 0 0-1-1H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v7zM19 0H5C2.243 0 0 2.243 0 5v7c0 2.757 2.243 5 5 5v6a1 1 0 0 0 1.707.707L13.414 17H19c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zm-1 5H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2", id: "id-icons/IconMessage-a" })
    ),
    React.createElement(
      "g",
      { id: "bubble", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconMessage-a" })
      ),
      React.createElement("use", { id: "icons/24px/Message-Bubble", fill: "#000", xlinkHref: "#id-icons/IconMessage-a" })
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
var IconMessage = styled(IconMessageSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconMessage.propTypes = {
  size: PropTypes.number
};
IconMessage.defaultProps = {
  size: 24
}; // @component

module.exports = IconMessage;
