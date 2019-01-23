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
var IconBentoTinySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "12", height: "12", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconBentoTiny-a", d: "M8 3.99h3V.997H8V3.99zm-1 .498V.498A.5.5 0 0 1 7.5 0h4a.5.5 0 0 1 .5.499v3.99a.5.5 0 0 1-.5.498h-4a.5.5 0 0 1-.5-.499zm-6 6.515h3V8.01H1v2.993zM0 11.5v-3.99a.5.5 0 0 1 .5-.498h4a.5.5 0 0 1 .5.499v3.99a.5.5 0 0 1-.5.498h-4a.5.5 0 0 1-.5-.499zm8-.498h3V8.01H8v2.993zM7 11.5v-3.99a.5.5 0 0 1 .5-.498h4a.5.5 0 0 1 .5.499v3.99a.5.5 0 0 1-.5.498h-4a.5.5 0 0 1-.5-.499zM1 3.99h3V.997H1V3.99zm-1 .498V.498A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 .5.499v3.99a.5.5 0 0 1-.5.498h-4a.5.5 0 0 1-.5-.499z" })
    ),
    React.createElement("use", { xlinkHref: "#id-icons/IconBentoTiny-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconBentoTiny = styled(IconBentoTinySvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconBentoTiny.propTypes = {
  size: PropTypes.number
};
IconBentoTiny.defaultProps = {
  size: 12
}; // @component

module.exports = IconBentoTiny;
