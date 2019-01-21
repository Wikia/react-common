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
var IconTagSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M22 10.586l-11 11L2.414 13l11-11H22v8.586zM23 0H13a1 1 0 0 0-.707.293l-12 12a.999.999 0 0 0 0 1.414l10 10a.997.997 0 0 0 1.414 0l12-12A.996.996 0 0 0 24 11V1a1 1 0 0 0-1-1zm-6 9c1.103 0 2-.896 2-2s-.897-2-2-2-2 .896-2 2 .897 2 2 2", id: "id-icons/IconTag-a" })
    ),
    React.createElement(
      "g",
      { id: "tag", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconTag-a" })
      ),
      React.createElement("use", { id: "icons/24px/Tag", fill: "#000", xlinkHref: "#id-icons/IconTag-a" })
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
var IconTag = styled(IconTagSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconTag.propTypes = {
  size: PropTypes.number
};
IconTag.defaultProps = {
  size: 24
}; // @component

module.exports = IconTag;
