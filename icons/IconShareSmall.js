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
var IconShareSmallSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "18", height: "18", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconShareSmall-a", d: "M14.5 15a1.502 1.502 0 0 1-1.406-2.022l.022-.05.017-.045c.236-.52.76-.883 1.367-.883.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5M4.906 9.522l-.022.05-.017.045c-.236.52-.76.883-1.367.883C2.673 10.5 2 9.827 2 9s.673-1.5 1.5-1.5c.607 0 1.131.363 1.367.883l.017.045.022.05a1.482 1.482 0 0 1 0 1.044M14.5 3c.827 0 1.5.673 1.5 1.5S15.327 6 14.5 6a1.503 1.503 0 0 1-1.367-.883l-.017-.045-.022-.05A1.502 1.502 0 0 1 14.5 3m0 7c-1.098 0-2.08.508-2.722 1.303L6.983 9.348a3.653 3.653 0 0 0 0-.696l4.795-1.955A3.492 3.492 0 0 0 14.5 8C16.43 8 18 6.43 18 4.5S16.43 1 14.5 1a3.504 3.504 0 0 0-3.483 3.848L6.222 6.803A3.492 3.492 0 0 0 3.5 5.5C1.57 5.5 0 7.07 0 9s1.57 3.5 3.5 3.5c1.098 0 2.08-.508 2.722-1.303l4.795 1.955A3.504 3.504 0 0 0 14.5 17c1.93 0 3.5-1.57 3.5-3.5S16.43 10 14.5 10" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconShareSmall-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconShareSmall = styled(function (_ref) {
  var size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["size"]);

  return React.createElement(IconShareSmallSvg, _extends({
    height: size,
    width: size
  }, rest));
})(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconShareSmall.propTypes = {
  /** Size of the icon */
  size: PropTypes.number
};
IconShareSmall.defaultProps = {
  size: 18
}; // @component

module.exports = IconShareSmall;
