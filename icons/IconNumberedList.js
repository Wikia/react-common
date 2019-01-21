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
var IconNumberedListSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M2.707 5.707L3 5.414V10a1 1 0 1 0 2 0V3a.999.999 0 0 0-1.707-.707l-2 2a.999.999 0 1 0 1.414 1.414M12 4h10a1 1 0 1 0 0-2H12a1 1 0 1 0 0 2M7 16c0-1.654-1.346-3-3-3a2.94 2.94 0 0 0-2.126.892.999.999 0 1 0 1.432 1.396A.957.957 0 0 1 4 15c.552 0 1 .449 1 1 0 .5-.85 1.138-1.6 1.7C2.275 18.544 1 19.5 1 21a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2H3.71c.271-.236.59-.475.89-.7C5.725 18.456 7 17.5 7 16m15 4H12a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2m0-9H12a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2", id: "id-icons/IconNumberedList-a" })
    ),
    React.createElement(
      "g",
      { id: "numbered-list", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconNumberedList-a" })
      ),
      React.createElement("use", { id: "icons/24px/Numbered-List", fill: "#000", xlinkHref: "#id-icons/IconNumberedList-a" })
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
var IconNumberedList = styled(IconNumberedListSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconNumberedList.propTypes = {
  size: PropTypes.number
};
IconNumberedList.defaultProps = {
  size: 24
}; // @component

module.exports = IconNumberedList;
