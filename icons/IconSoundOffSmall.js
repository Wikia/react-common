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
var IconSoundOffSmallSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "18", height: "18", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconSoundOffSmall-a", d: "M7 13.587l-2.293-2.293A1.002 1.002 0 0 0 4 11H2V7h2c.265 0 .52-.105.707-.293L7 4.415v9.172zm1.383-12.51c.373.155.617.52.617.924v14a1 1 0 0 1-1.707.707L3.586 13H1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.586l3.707-3.707a.996.996 0 0 1 1.09-.217zM16.414 9l1.293 1.293a.999.999 0 1 1-1.414 1.414L15 10.415l-1.293 1.293a.999.999 0 1 1-1.414-1.414L13.586 9l-1.293-1.293a.999.999 0 1 1 1.414-1.414L15 7.587l1.293-1.293a.999.999 0 1 1 1.414 1.414L16.414 9z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconSoundOffSmall-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconSoundOffSmall = styled(IconSoundOffSmallSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconSoundOffSmall.propTypes = {
  size: PropTypes.number
};
IconSoundOffSmall.defaultProps = {
  size: 18
}; // @component

module.exports = IconSoundOffSmall;
