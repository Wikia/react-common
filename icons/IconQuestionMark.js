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
var IconQuestionMarkSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10m0-22C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0m0 5a4.007 4.007 0 0 0-3.771 2.666.998.998 0 1 0 1.884.668A2.001 2.001 0 0 1 14 9c0 1.104-.897 2-2 2a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-1.127A4.006 4.006 0 0 0 16 9c0-2.205-1.794-4-4-4m-.005 11.99a1.01 1.01 0 0 0-1.006 1.005A1.01 1.01 0 0 0 11.995 19c.553 0 1.005-.453 1.005-1.005 0-.552-.452-1.005-1.005-1.005", id: "id-icons/IconQuestionMark-a" })
    ),
    React.createElement(
      "g",
      { id: "question", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconQuestionMark-a" })
      ),
      React.createElement("use", { id: "icons/24px/Question", fill: "#000", xlinkHref: "#id-icons/IconQuestionMark-a" })
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
var IconQuestionMark = styled(IconQuestionMarkSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconQuestionMark.propTypes = {
  size: PropTypes.number
};
IconQuestionMark.defaultProps = {
  size: 24
}; // @component

module.exports = IconQuestionMark;
