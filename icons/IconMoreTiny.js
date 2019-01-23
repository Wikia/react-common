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
var IconMoreTinySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "12", height: "12", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconMoreTiny-a", d: "M6.71 5.29c.09.1.16.21.21.33.05.12.08.25.08.38 0 .26-.11.52-.29.71l-.15.12a.762.762 0 0 1-.18.09c-.06.03-.12.05-.18.06-.07.01-.13.02-.2.02-.26 0-.52-.11-.71-.29C5.11 6.52 5 6.26 5 6c0-.13.03-.26.08-.38s.12-.23.21-.33c.23-.23.58-.34.91-.27.06.01.12.03.18.06.06.02.12.05.18.09.05.03.1.08.15.12zM6 2.001c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71a1 1 0 0 1 .08-.38c.05-.12.12-.23.21-.33.23-.229.58-.34.91-.27.06.01.12.03.18.06.06.02.12.05.18.09.05.03.1.08.15.12.09.1.16.21.21.33A1 1 0 0 1 7 1c0 .26-.11.52-.29.71l-.15.12a.797.797 0 0 1-.18.09.669.669 0 0 1-.18.06c-.07.01-.13.02-.2.02zm.71 8.29c.09.1.16.21.21.33A1 1 0 0 1 7 11c0 .26-.11.52-.29.71l-.15.12a.797.797 0 0 1-.18.09.669.669 0 0 1-.18.06c-.07.01-.13.02-.2.02-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71a1 1 0 0 1 .08-.38c.05-.12.12-.23.21-.33.23-.229.58-.34.91-.27.06.01.12.03.18.06.06.02.12.05.18.09.05.03.1.08.15.12z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconMoreTiny-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconMoreTiny = styled(IconMoreTinySvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconMoreTiny.propTypes = {
  size: PropTypes.number
};
IconMoreTiny.defaultProps = {
  size: 12
}; // @component

module.exports = IconMoreTiny;
