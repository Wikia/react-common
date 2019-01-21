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
var IconMagnifyingGlassSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18m12.207 3.293l-4.823-4.822A9.455 9.455 0 0 0 20 10.5C20 5.262 15.738 1 10.5 1S1 5.262 1 10.5 5.262 20 10.5 20c2.26 0 4.338-.793 5.97-2.115l4.823 4.822a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414", id: "id-icons/IconMagnifyingGlass-a" })
    ),
    React.createElement(
      "g",
      { id: "search", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconMagnifyingGlass-a" })
      ),
      React.createElement("use", { id: "icons/24px/Search", fill: "#000", xlinkHref: "#id-icons/IconMagnifyingGlass-a" })
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
var IconMagnifyingGlass = styled(IconMagnifyingGlassSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconMagnifyingGlass.propTypes = {
  size: PropTypes.number
};
IconMagnifyingGlass.defaultProps = {
  size: 24
}; // @component

module.exports = IconMagnifyingGlass;
