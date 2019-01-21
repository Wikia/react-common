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
var IconSoundOffSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M21.414 12l2.293-2.292a.999.999 0 1 0-1.414-1.414L20 10.587l-2.293-2.293a.999.999 0 1 0-1.414 1.414L18.586 12l-2.293 2.293a.999.999 0 1 0 1.414 1.414L20 13.415l2.293 2.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L21.414 12zM10 19.587l-4.293-4.293A1.002 1.002 0 0 0 5 15H2V9h3c.265 0 .52-.105.707-.293L10 4.414v15.172zm1.383-18.51a.998.998 0 0 0-1.09.217L4.586 7H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.586l5.707 5.707a.996.996 0 0 0 1.09.217A1 1 0 0 0 12 22V2c0-.404-.244-.769-.617-.924z", id: "id-icons/IconSoundOff-a" })
    ),
    React.createElement(
      "g",
      { id: "sound-off", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconSoundOff-a" })
      ),
      React.createElement("use", { id: "icons/24px/Sound-Off", fill: "#000", xlinkHref: "#id-icons/IconSoundOff-a" })
    )
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconSoundOff = styled(IconSoundOffSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconSoundOff.propTypes = {
  size: PropTypes.number
};
IconSoundOff.defaultProps = {
  size: 24
}; // @component

module.exports = IconSoundOff;
