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
var IconGearSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M12 19c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7m11-8h-2.056a8.96 8.96 0 0 0-1.915-4.615l1.456-1.456a.999.999 0 1 0-1.414-1.414l-1.456 1.456A8.97 8.97 0 0 0 13 3.055V1a1 1 0 1 0-2 0v2.055a8.97 8.97 0 0 0-4.615 1.916L4.929 3.515a.999.999 0 1 0-1.414 1.414l1.456 1.456A8.96 8.96 0 0 0 3.056 11H1a1 1 0 1 0 0 2h2.056a8.96 8.96 0 0 0 1.915 4.615l-1.456 1.456a.999.999 0 1 0 1.414 1.414l1.456-1.456A8.97 8.97 0 0 0 11 20.945V23a1 1 0 1 0 2 0v-2.055a8.97 8.97 0 0 0 4.615-1.916l1.456 1.456a.999.999 0 1 0 1.414-1.414l-1.456-1.456A8.96 8.96 0 0 0 20.944 13H23a1 1 0 1 0 0-2m-11 3c-1.103 0-2-.896-2-2s.897-2 2-2 2 .896 2 2-.897 2-2 2m0-6c-2.206 0-4 1.795-4 4s1.794 4 4 4 4-1.795 4-4-1.794-4-4-4", id: "id-icons/IconGear-a" })
    ),
    React.createElement(
      "g",
      { id: "settings", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconGear-a" })
      ),
      React.createElement("use", { id: "icons/24px/Settings", fill: "#000", xlinkHref: "#id-icons/IconGear-a" })
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
var IconGear = styled(IconGearSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconGear.propTypes = {
  size: PropTypes.number
};
IconGear.defaultProps = {
  size: 24
}; // @component

module.exports = IconGear;
