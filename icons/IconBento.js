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
var IconBentoSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "24", height: "24", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconBento-a", d: "M2 22h6.25v-6.25H2V22zm7.25 2H1a1 1 0 0 1-1-1v-8.25a1 1 0 0 1 1-1h8.25a1 1 0 0 1 1 1V23a1 1 0 0 1-1 1zm6.5-2H22v-6.25h-6.25V22zM23 24h-8.25a1 1 0 0 1-1-1v-8.25a1 1 0 0 1 1-1H23a1 1 0 0 1 1 1V23a1 1 0 0 1-1 1zM15.75 8.25H22V2h-6.25v6.25zm7.25 2h-8.25a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1H23a1 1 0 0 1 1 1v8.25a1 1 0 0 1-1 1zm-21-2h6.25V2H2v6.25zm7.25 2H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h8.25a1 1 0 0 1 1 1v8.25a1 1 0 0 1-1 1z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconBento-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconBento = styled(IconBentoSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconBento.propTypes = {
  size: PropTypes.number
};
IconBento.defaultProps = {
  size: 24
}; // @component

module.exports = IconBento;
