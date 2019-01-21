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
var IconCameraSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M2 4h2a1 1 0 1 0 0-2H2a1 1 0 1 0 0 2m19 17H3V8h2c.266 0 .52-.105.707-.293L9.414 4h5.172l3.707 3.707A.996.996 0 0 0 19 8h2v13zm1-15h-2.586l-3.707-3.707A.996.996 0 0 0 15 2H9a.996.996 0 0 0-.707.293L4.586 6H2a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-10 9c-1.103 0-2-.896-2-2s.897-2 2-2 2 .896 2 2-.897 2-2 2m0-6c-2.206 0-4 1.795-4 4s1.794 4 4 4 4-1.795 4-4-1.794-4-4-4", id: "id-icons/IconCamera-a" })
    ),
    React.createElement(
      "g",
      { id: "camera", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconCamera-a" })
      ),
      React.createElement("use", { id: "icons/24px/Camera", fill: "#000", xlinkHref: "#id-icons/IconCamera-a" })
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
var IconCamera = styled(IconCameraSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconCamera.propTypes = {
  size: PropTypes.number
};
IconCamera.defaultProps = {
  size: 24
}; // @component

module.exports = IconCamera;
