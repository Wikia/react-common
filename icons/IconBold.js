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
var IconBoldSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M6 10h4c2.206 0 4-1.795 4-4s-1.794-4-4-4H6v8zm0 12h7c2.757 0 5-2.243 5-5s-2.243-5-5-5H6v10zm7 2H5a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h5c3.309 0 6 2.691 6 6a5.982 5.982 0 0 1-1.652 4.131C17.565 10.76 20 13.602 20 17c0 3.859-3.14 7-7 7z", id: "id-icons/IconBold-a" })
    ),
    React.createElement(
      "g",
      { id: "bold", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconBold-a" })
      ),
      React.createElement("use", { id: "icons/24px/Bold", fill: "#000", xlinkHref: "#id-icons/IconBold-a" })
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
var IconBold = styled(IconBoldSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconBold.propTypes = {
  size: PropTypes.number
};
IconBold.defaultProps = {
  size: 24
}; // @component

module.exports = IconBold;
