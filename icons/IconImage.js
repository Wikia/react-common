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
var IconImageSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M3 21v-6.586l4-4 6.293 6.293a.999.999 0 0 0 1.414 0L18 13.414l3 3V21H3zM21 3v10.586l-2.293-2.293a.999.999 0 0 0-1.414 0L14 14.586 7.707 8.293a.999.999 0 0 0-1.414 0L3 11.586V3h18zm1-2H2a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-8 8c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2", id: "id-icons/IconImage-a" })
    ),
    React.createElement(
      "g",
      { id: "image", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconImage-a" })
      ),
      React.createElement("use", { id: "icons/24px/Image", fill: "#000", xlinkHref: "#id-icons/IconImage-a" })
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
var IconImage = styled(IconImageSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconImage.propTypes = {
  size: PropTypes.number
};
IconImage.defaultProps = {
  size: 24
}; // @component

module.exports = IconImage;
