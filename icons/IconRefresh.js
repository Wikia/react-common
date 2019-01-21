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
var IconRefreshSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M12 24C5.935 24 1 19.065 1 13S5.935 2 12 2c3.052 0 5.943 1.281 8 3.453V2a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h3.707A9.035 9.035 0 0 0 12 4c-4.963 0-9 4.037-9 9s4.037 9 9 9a8.966 8.966 0 0 0 8.956-8.099 1 1 0 1 1 1.99.198A10.957 10.957 0 0 1 12 24", id: "id-icons/IconRefresh-a" })
    ),
    React.createElement(
      "g",
      { id: "reload", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconRefresh-a" })
      ),
      React.createElement("use", { id: "icons/24px/Loading", fill: "#000", xlinkHref: "#id-icons/IconRefresh-a" })
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
var IconRefresh = styled(IconRefreshSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconRefresh.propTypes = {
  size: PropTypes.number
};
IconRefresh.defaultProps = {
  size: 24
}; // @component

module.exports = IconRefresh;
