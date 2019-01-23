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
var IconSitemapTinySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "12", height: "12", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconSitemapTiny-a", d: "M11 5H7V4a1 1 0 0 0-2 0v1H1a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V7h3v1a1 1 0 0 0 2 0V7h3v1a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1m-4.29 5.291c-.05-.04-.1-.09-.15-.12a.757.757 0 0 0-.18-.09.639.639 0 0 0-.18-.06c-.33-.07-.68.041-.91.27-.09.1-.16.21-.21.33A1 1 0 0 0 5 11c0 .26.11.52.29.71.19.18.45.29.71.29.07 0 .13-.01.2-.02.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71a1 1 0 0 0-.08-.38 1.164 1.164 0 0 0-.21-.33m-5 0c-.05-.04-.1-.09-.15-.12a.757.757 0 0 0-.18-.09.639.639 0 0 0-.18-.06c-.33-.07-.68.041-.91.27-.09.1-.16.21-.21.33A1 1 0 0 0 0 11c0 .26.11.52.29.71.19.18.45.29.71.29.07 0 .13-.01.2-.02.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71a1 1 0 0 0-.08-.38 1.164 1.164 0 0 0-.21-.33m10 0c-.05-.04-.1-.09-.15-.12a.757.757 0 0 0-.18-.09.639.639 0 0 0-.18-.06c-.33-.07-.68.041-.91.27-.09.1-.16.21-.21.33A1 1 0 0 0 10 11c0 .26.11.52.29.71.19.18.45.29.71.29.07 0 .13-.01.2-.02.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71a1 1 0 0 0-.08-.38 1.164 1.164 0 0 0-.21-.33M6 2.001c.07 0 .13-.012.2-.022a.603.603 0 0 0 .18-.059c.06-.02.12-.05.18-.09l.15-.12C6.89 1.521 7 1.26 7 1c0-.13-.03-.26-.08-.38S6.8.39 6.71.29C6.66.25 6.61.2 6.56.17a.802.802 0 0 0-.18-.09A.63.63 0 0 0 6.2.02c-.33-.07-.68.04-.91.27-.09.1-.16.21-.21.33A.991.991 0 0 0 5 1c0 .26.11.52.29.71.19.18.45.29.71.29" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconSitemapTiny-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconSitemapTiny = styled(function (_ref) {
  var size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["size"]);

  return React.createElement(IconSitemapTinySvg, _extends({
    height: size,
    width: size
  }, rest));
})(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconSitemapTiny.propTypes = {
  /** Size of the icon */
  size: PropTypes.number
};
IconSitemapTiny.defaultProps = {
  size: 12
}; // @component

module.exports = IconSitemapTiny;
