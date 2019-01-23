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
var IconEyeTinySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "12", height: "12", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconEyeTiny-a", d: "M5.9 9a4.02 4.02 0 0 1-3.876-3A4.022 4.022 0 0 1 5.9 3a4.022 4.022 0 0 1 3.876 3A4.02 4.02 0 0 1 5.9 9m5.879-3.212A6.027 6.027 0 0 0 5.9 1 6.027 6.027 0 0 0 .021 5.788 1.179 1.179 0 0 0 0 6.011a.99.99 0 0 0 .021.202A6.026 6.026 0 0 0 5.9 11a6.026 6.026 0 0 0 5.879-4.787.99.99 0 0 0 .021-.202V5.99a.983.983 0 0 0-.021-.202M6.61 5.29c-.05-.04-.1-.09-.15-.12a.802.802 0 0 0-.18-.091.665.665 0 0 0-.18-.059c-.33-.07-.68.04-.91.27-.09.1-.16.21-.21.33A.991.991 0 0 0 4.9 6c0 .26.11.52.29.71.19.18.45.29.71.29.07 0 .13-.011.2-.021a.603.603 0 0 0 .18-.059c.06-.021.12-.05.18-.091l.15-.119c.18-.19.29-.45.29-.71 0-.13-.03-.261-.08-.38-.05-.12-.12-.23-.21-.33" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconEyeTiny-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconEyeTiny = styled(IconEyeTinySvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconEyeTiny.propTypes = {
  size: PropTypes.number
};
IconEyeTiny.defaultProps = {
  size: 12
}; // @component

module.exports = IconEyeTiny;
