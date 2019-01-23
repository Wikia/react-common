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
var IconSoundSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "24", height: "24", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconSound-a", d: "M15.739 17a1 1 0 0 1-.815-1.578A5.885 5.885 0 0 0 16 12a5.885 5.885 0 0 0-1.076-3.422 1 1 0 0 1 1.632-1.156A7.874 7.874 0 0 1 18 12c0 1.66-.499 3.244-1.444 4.578a.997.997 0 0 1-.817.422zm4.19 4a1 1 0 0 1-.74-1.672A10.89 10.89 0 0 0 22 12a10.89 10.89 0 0 0-2.811-7.328 1 1 0 0 1 1.482-1.344A12.887 12.887 0 0 1 24 12c0 3.222-1.182 6.301-3.329 8.672a1 1 0 0 1-.742.328zM2 15h3a1 1 0 0 1 .707.293L10 19.586V4.414L5.707 8.707A1 1 0 0 1 5 9H2v6zm9 8a.999.999 0 0 1-.707-.293L4.586 17H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3.586l5.707-5.707A1 1 0 0 1 12 2v20a1 1 0 0 1-1 1z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconSound-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconSound = styled(IconSoundSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconSound.propTypes = {
  size: PropTypes.number
};
IconSound.defaultProps = {
  size: 24
}; // @component

module.exports = IconSound;
