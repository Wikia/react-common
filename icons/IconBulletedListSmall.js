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
var IconBulletedListSmallSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "18", height: "18", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconBulletedListSmall-a", d: "M16 14a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h10zm0-6a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h10zM6 4a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2H6zM2.38 14.08c.12.05.229.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71-.101.09-.21.16-.33.21-.12.05-.25.08-.38.08-.26 0-.52-.11-.71-.29A1.049 1.049 0 0 1 1 15c0-.26.109-.52.29-.71a.998.998 0 0 1 1.09-.21zm0-6c.12.05.229.12.33.21.18.19.29.45.29.71 0 .07-.01.13-.02.2a.631.631 0 0 1-.06.18.568.568 0 0 1-.09.17c-.04.06-.08.11-.12.16-.101.09-.21.16-.33.21-.12.05-.25.08-.38.08-.26 0-.52-.11-.71-.29-.04-.05-.09-.1-.12-.16a.568.568 0 0 1-.09-.17.631.631 0 0 1-.06-.18C1.01 9.13 1 9.07 1 9c0-.26.109-.52.29-.71a.998.998 0 0 1 1.09-.21zm0-6c.12.05.229.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71-.101.09-.21.16-.33.21-.12.05-.25.08-.38.08-.26 0-.52-.11-.71-.29A1.049 1.049 0 0 1 1 3c0-.26.109-.52.29-.71.279-.28.73-.37 1.09-.21z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconBulletedListSmall-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconBulletedListSmall = styled(function (_ref) {
  var size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["size"]);

  return React.createElement(IconBulletedListSmallSvg, _extends({
    height: size,
    width: size
  }, rest));
})(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconBulletedListSmall.propTypes = {
  /** Size of the icon */
  size: PropTypes.number
};
IconBulletedListSmall.defaultProps = {
  size: 18
}; // @component

module.exports = IconBulletedListSmall;
