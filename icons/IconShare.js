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
var IconShareSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M19 22a3.004 3.004 0 0 1-2.724-4.256 1.055 1.055 0 0 0 .087-.174A3.004 3.004 0 0 1 19 16c1.654 0 3 1.346 3 3s-1.346 3-3 3M7.724 13.256a1.055 1.055 0 0 0-.087.174A3.004 3.004 0 0 1 5 15c-1.654 0-3-1.346-3-3s1.346-3 3-3c1.137 0 2.128.636 2.637 1.57a1.055 1.055 0 0 0 .087.174c.177.382.276.808.276 1.256 0 .448-.099.874-.276 1.256M19 2c1.654 0 3 1.346 3 3s-1.346 3-3 3a3.004 3.004 0 0 1-2.637-1.57 1.055 1.055 0 0 0-.087-.174A3.004 3.004 0 0 1 19 2m0 12a4.998 4.998 0 0 0-3.931 1.912l-5.24-2.611a5.04 5.04 0 0 0 0-2.602l5.24-2.611A4.998 4.998 0 0 0 24 5c0-2.757-2.243-5-5-5a5.006 5.006 0 0 0-4.829 6.301l-5.24 2.611A4.998 4.998 0 0 0 0 12a4.998 4.998 0 1 0 8.931 3.088l5.24 2.611A5.006 5.006 0 0 0 19 24c2.757 0 5-2.243 5-5s-2.243-5-5-5", id: "id-icons/IconShare-a" })
    ),
    React.createElement(
      "g",
      { id: "share", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconShare-a" })
      ),
      React.createElement("use", { id: "icons/24px/Share", fill: "#000", xlinkHref: "#id-icons/IconShare-a" })
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
var IconShare = styled(IconShareSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconShare.propTypes = {
  size: PropTypes.number
};
IconShare.defaultProps = {
  size: 24
}; // @component

module.exports = IconShare;
