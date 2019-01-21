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
var IconVideoSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M2 18h12v-2.73a.999.999 0 0 1 1.423-.907L22 17.43V6.57l-6.577 3.067A1 1 0 0 1 14 8.73V6H2v12zm21 2a.998.998 0 0 1-.423-.094L16 16.84V19a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2.16l6.577-3.066A1 1 0 0 1 24 5v14a1.002 1.002 0 0 1-1 1z", id: "id-icons/IconVideo-a" })
    ),
    React.createElement(
      "g",
      { id: "video", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconVideo-a" })
      ),
      React.createElement("use", { id: "icons/24px/Video-Camera", fill: "#000", xlinkHref: "#id-icons/IconVideo-a" })
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
var IconVideo = styled(IconVideoSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconVideo.propTypes = {
  size: PropTypes.number
};
IconVideo.defaultProps = {
  size: 24
}; // @component

module.exports = IconVideo;
