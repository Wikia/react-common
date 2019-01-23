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
var IconBulletedListTinySvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "12", height: "12", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconBulletedListTiny-a", d: "M1.29 9.277c-.181.19-.29.45-.29.71 0 .26.109.52.29.71.189.18.45.29.71.29.26 0 .519-.11.71-.29.18-.19.29-.45.29-.71 0-.26-.11-.52-.29-.71-.38-.37-1.05-.37-1.42 0M10 9H6a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2M6 3h4a1 1 0 1 0 0-2H6a1 1 0 1 0 0 2m4 2H6a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2M1.29 1.277c.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71-.191.18-.45.29-.71.29-.26 0-.521-.11-.71-.29-.181-.19-.29-.45-.29-.71 0-.26.109-.52.29-.71zM2.55 5.17c.06.03.11.08.16.12.18.19.29.45.29.71 0 .26-.11.521-.29.71-.05.04-.1.09-.16.12a.559.559 0 0 1-.17.09c-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02-.26 0-.52-.11-.71-.29A1.05 1.05 0 0 1 1 6c0-.26.11-.52.29-.71.24-.23.58-.34.9-.269a.6.6 0 0 1 .19.058c.06.021.12.051.17.091z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconBulletedListTiny-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconBulletedListTiny = styled(IconBulletedListTinySvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconBulletedListTiny.propTypes = {
  size: PropTypes.number
};
IconBulletedListTiny.defaultProps = {
  size: 12
}; // @component

module.exports = IconBulletedListTiny;
