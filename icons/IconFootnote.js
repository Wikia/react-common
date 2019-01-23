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
var IconFootnoteSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "24", height: "24", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconFootnote-a", d: "M22 1h-3a1 1 0 1 0 0 2h2v10h-2a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M9 19c-1.103 0-2 .896-2 2s.897 2 2 2 2-.896 2-2-.897-2-2-2m-6 0c-1.103 0-2 .896-2 2s.897 2 2 2 2-.896 2-2-.897-2-2-2m9-6h-2V3h2a1 1 0 1 0 0-2H9a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2m4.383-8.924a.996.996 0 0 0-1.09.217l-2 2a1 1 0 0 0 1.414 1.414L15 7.414V11a1 1 0 1 0 2 0V5a.999.999 0 0 0-.617-.924M15 19c-1.103 0-2 .896-2 2s.897 2 2 2 2-.896 2-2-.897-2-2-2" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconFootnote-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconFootnote = styled(IconFootnoteSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconFootnote.propTypes = {
  size: PropTypes.number
};
IconFootnote.defaultProps = {
  size: 24
}; // @component

module.exports = IconFootnote;
