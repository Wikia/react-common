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
var IconNumberedListSmallSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "18", height: "18", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconNumberedListSmall-a", d: "M3.688 15a.5.5 0 0 1 0 1H1.5a.5.5 0 0 1-.5-.5c0-1.207.635-1.842 1.147-2.354.477-.476.854-.853.854-1.646a.5.5 0 0 0-1 0A.5.5 0 0 1 1 11.5c0-.826.673-1.5 1.5-1.5.828 0 1.5.674 1.5 1.5 0 1.207-.635 1.844-1.147 2.354-.364.365-.67.67-.794 1.147h1.628zM1.853 3.854a.5.5 0 0 1-.706-.707l1-1A.5.5 0 1 1 3 2.5v5a.499.499 0 1 1-1 0V3.708l-.147.146zM7 4a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2H7zm9 4a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h9zm0 6a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h9z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconNumberedListSmall-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconNumberedListSmall = styled(IconNumberedListSmallSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconNumberedListSmall.propTypes = {
  size: PropTypes.number
};
IconNumberedListSmall.defaultProps = {
  size: 18
}; // @component

module.exports = IconNumberedListSmall;
