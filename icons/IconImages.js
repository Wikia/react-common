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
var IconImagesSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M12 14c1.103 0 2-.896 2-2s-.897-2-2-2-2 .896-2 2 .897 2 2 2m4 7h-1.586L3 9.586V8h13v13zM3 21v-8.586L11.586 21H3zM17 6H2a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm5-5H7a1 1 0 1 0 0 2h14v14a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1", id: "id-icons/IconImages-a" })
    ),
    React.createElement(
      "g",
      { id: "images", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconImages-a" })
      ),
      React.createElement("use", { id: "icons/24px/Images", fill: "#000", xlinkHref: "#id-icons/IconImages-a" })
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
var IconImages = styled(IconImagesSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconImages.propTypes = {
  size: PropTypes.number
};
IconImages.defaultProps = {
  size: 24
}; // @component

module.exports = IconImages;
