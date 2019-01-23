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
var IconUsersTinySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "12", height: "12", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconUsersTiny-a", d: "M4 5.998c2.206 0 4 1.794 4 4a1 1 0 0 1-2 0c0-1.103-.897-2-2-2s-2 .897-2 2a1 1 0 0 1-2 0c0-2.206 1.794-4 4-4zm4-2c2.206 0 4 1.794 4 4a1 1 0 0 1-2 0c0-1.103-.897-2-2-2a1 1 0 0 1 0-2zM4 5c-.26 0-.52-.11-.71-.29C3.11 4.52 3 4.26 3 4a1 1 0 0 1 .08-.38c.05-.12.12-.23.21-.33.23-.229.58-.34.91-.27.06.01.12.03.18.06.06.02.12.05.18.09.05.03.1.08.15.12.09.1.16.21.21.33a1 1 0 0 1 .08.38c0 .26-.11.52-.29.71l-.15.12a.797.797 0 0 1-.18.09.669.669 0 0 1-.18.06c-.07.01-.13.02-.2.02zM8 3c-.26 0-.52-.11-.71-.29A1.05 1.05 0 0 1 7 2c0-.13.03-.26.08-.38s.12-.23.21-.33c.23-.23.58-.34.91-.269a.63.63 0 0 1 .18.058c.06.021.12.051.18.091.05.03.1.08.15.12.09.1.16.21.21.33.05.12.08.25.08.38 0 .26-.11.521-.29.71l-.15.12a.762.762 0 0 1-.18.09c-.06.03-.12.05-.18.06-.07.01-.13.02-.2.02z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconUsersTiny-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconUsersTiny = styled(IconUsersTinySvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconUsersTiny.propTypes = {
  size: PropTypes.number
};
IconUsersTiny.defaultProps = {
  size: 12
}; // @component

module.exports = IconUsersTiny;
