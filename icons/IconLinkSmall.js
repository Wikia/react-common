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
var IconLinkSmallSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "18", height: "18", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconLinkSmall-a", d: "M9.605 6.98a.999.999 0 0 1 1.414 0 5.183 5.183 0 0 1 0 7.322l-1.181 1.181A5.148 5.148 0 0 1 6.177 17a5.144 5.144 0 0 1-3.66-1.517A5.142 5.142 0 0 1 1 11.823c0-1.383.539-2.683 1.517-3.66a.999.999 0 1 1 1.414 1.413A3.155 3.155 0 0 0 3 11.822c0 .85.331 1.647.931 2.248 1.2 1.2 3.293 1.2 4.493 0l1.181-1.181a3.181 3.181 0 0 0 0-4.494.999.999 0 0 1 0-1.414zm5.89-4.476A5.104 5.104 0 0 1 17 6.134a5.103 5.103 0 0 1-1.504 3.633 1 1 0 0 1-1.414-1.414c.592-.593.918-1.38.918-2.218 0-.837-.326-1.624-.918-2.217-1.185-1.184-3.25-1.184-4.434 0l-1.17 1.17a3.114 3.114 0 0 0-.918 2.217c0 .838.326 1.625.918 2.217a.999.999 0 1 1-1.414 1.414A5.099 5.099 0 0 1 5.56 7.305c0-1.371.534-2.661 1.504-3.631l1.17-1.17A5.102 5.102 0 0 1 11.864 1a5.1 5.1 0 0 1 3.632 1.504z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconLinkSmall-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconLinkSmall = styled(IconLinkSmallSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconLinkSmall.propTypes = {
  size: PropTypes.number
};
IconLinkSmall.defaultProps = {
  size: 18
}; // @component

module.exports = IconLinkSmall;
