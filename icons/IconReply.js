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
var IconReplySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "24", height: "24", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconReply-a", d: "M11 14c4.497 0 8.606 2.324 10.955 6.003.03-.331.045-.666.045-1.003 0-6.065-4.935-11-11-11a1 1 0 0 1-1-1V3.414L2.414 11 10 18.586V15a1 1 0 0 1 1-1m11.31 10h-.004a1.003 1.003 0 0 1-.94-.668A11.003 11.003 0 0 0 12 16.045V21a.999.999 0 0 1-1.707.707l-10-10a.999.999 0 0 1 0-1.414l10-10A1.002 1.002 0 0 1 12 1v5.038c6.703.513 12 6.13 12 12.962 0 1.498-.252 2.958-.75 4.339a1 1 0 0 1-.94.66" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconReply-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconReply = styled(function (_ref) {
  var size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["size"]);

  return React.createElement(IconReplySvg, _extends({
    height: size,
    width: size
  }, rest));
})(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconReply.propTypes = {
  /** Size of the icon */
  size: PropTypes.number
};
IconReply.defaultProps = {
  size: 24
}; // @component

module.exports = IconReply;
