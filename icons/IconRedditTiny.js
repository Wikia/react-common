'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));
var PropTypes = _interopDefault(require('prop-types'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

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
var IconRedditTinySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "12", height: "12", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconRedditTiny-a", d: "M11.091 6.14c.196-.159.294-.375.294-.65a.772.772 0 0 0-.187-.517.6.6 0 0 0-.481-.222.63.63 0 0 0-.4.15c.373.353.631.766.774 1.238M9.689.974a.547.547 0 0 0-.121.355c0 .137.04.255.12.353.08.099.183.148.307.148a.418.418 0 0 0 .322-.148.51.51 0 0 0 .133-.353.512.512 0 0 0-.133-.355.418.418 0 0 0-.322-.148.377.377 0 0 0-.306.148M7.175 7.29c.169.178.37.266.601.266a.8.8 0 0 0 .601-.266.939.939 0 0 0 .255-.679.934.934 0 0 0-.241-.65.794.794 0 0 0-.615-.265c-.25 0-.454.09-.615.265a.932.932 0 0 0-.24.65c0 .276.084.502.254.679M5.987 9.917c.855 0 1.55-.295 2.085-.885l-.348-.354c-.445.472-1.025.708-1.737.708-.32 0-.624-.06-.909-.178-.285-.117-.49-.236-.615-.354l-.187-.176-.347.354c.534.59 1.22.885 2.058.885M3.393 6.61c0 .276.086.502.255.679a.8.8 0 0 0 .601.266.804.804 0 0 0 .602-.266.944.944 0 0 0 .253-.679.932.932 0 0 0-.24-.65.793.793 0 0 0-.615-.265.797.797 0 0 0-.615.265.939.939 0 0 0-.24.65m-2.486-.5c.144-.454.401-.857.775-1.21a.629.629 0 0 0-.4-.15.615.615 0 0 0-.468.222.741.741 0 0 0-.2.516c0 .296.098.503.293.621M12 5.52c0 .609-.24 1.052-.722 1.327.018.1.027.236.027.414 0 1.121-.521 2.08-1.563 2.878-1.043.797-2.295 1.194-3.755 1.194-1.461 0-2.708-.394-3.742-1.18C1.211 9.364.695 8.411.695 7.29c0-.196.009-.344.027-.443C.24 6.572 0 6.129 0 5.519c0-.412.134-.763.4-1.047.268-.286.58-.429.936-.429.321 0 .615.128.882.385.98-.748 2.129-1.151 3.449-1.21h.052l.829-3.04 2.405.53C9.203.235 9.551 0 9.995 0h.028c.338 0 .619.129.841.384.222.256.334.57.334.945 0 .373-.112.688-.334.944a1.068 1.068 0 0 1-.841.383h-.028c-.302 0-.57-.113-.801-.339a1.229 1.229 0 0 1-.375-.841l-1.79-.413-.588 2.183c1.354.099 2.468.493 3.341 1.182.267-.257.57-.385.909-.385.355 0 .663.143.921.429A1.5 1.5 0 0 1 12 5.519" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconRedditTiny-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconRedditTiny = styled(function (_ref) {
  var size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["size"]);

  return React.createElement(IconRedditTinySvg, _extends({
    height: size,
    width: size
  }, rest));
})(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconRedditTiny.propTypes = {
  /** Size of the icon */
  size: PropTypes.number
};
IconRedditTiny.defaultProps = {
  size: 12
}; // @component

module.exports = IconRedditTiny;
