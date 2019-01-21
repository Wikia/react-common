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
var IconBellSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M15 19a1 1 0 0 0-1 1c0 1.104-.897 2-2 2s-2-.896-2-2a1 1 0 1 0-2 0c0 2.205 1.794 4 4 4s4-1.795 4-4a1 1 0 0 0-1-1m-8.675-5l2.708-9.477A3.496 3.496 0 0 1 12.38 2c1.63 0 3.06 1.156 3.402 2.75L17.763 14H6.325zm11.411-9.668A5.507 5.507 0 0 0 12.38 0a5.505 5.505 0 0 0-5.27 3.975l-3.07 10.75A1 1 0 0 0 5 16h14a1 1 0 0 0 .977-1.209l-2.24-10.459z", id: "id-icons/IconBell-a" })
    ),
    React.createElement(
      "g",
      { id: "bell", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconBell-a" })
      ),
      React.createElement("use", { id: "icons/24px/Bell", fill: "#000", xlinkHref: "#id-icons/IconBell-a" })
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
var IconBell = styled(IconBellSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconBell.propTypes = {
  size: PropTypes.number
};
IconBell.defaultProps = {
  size: 24
}; // @component

module.exports = IconBell;
