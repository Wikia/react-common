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
var IconRedditSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "24", height: "24", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconReddit-a", d: "M21.334 13.023c.359-.283.538-.671.538-1.166 0-.354-.112-.663-.342-.928a1.111 1.111 0 0 0-.882-.398 1.17 1.17 0 0 0-.734.268 5.004 5.004 0 0 1 1.42 2.224m-2.572-9.275a.97.97 0 0 0-.222.638c0 .247.076.458.222.635a.697.697 0 0 0 .562.265c.23 0 .426-.088.59-.265a.904.904 0 0 0 .244-.635.908.908 0 0 0-.244-.638.773.773 0 0 0-.59-.264.697.697 0 0 0-.562.264M14.156 15.09c.31.319.677.477 1.102.477.424 0 .793-.158 1.102-.477.311-.319.466-.724.466-1.219 0-.46-.146-.848-.44-1.167-.294-.316-.67-.476-1.128-.476-.458 0-.832.16-1.127.476-.295.32-.44.708-.44 1.167 0 .495.153.9.465 1.219m-2.18 4.716c1.568 0 2.84-.529 3.822-1.589l-.638-.635c-.815.848-1.878 1.27-3.184 1.27a4.38 4.38 0 0 1-1.666-.319c-.523-.21-.9-.422-1.128-.635l-.343-.316-.637.635c.98 1.06 2.237 1.59 3.774 1.59M7.221 13.87c0 .495.157.9.467 1.219.309.319.677.477 1.102.477.426 0 .792-.158 1.104-.477.308-.319.463-.724.463-1.219 0-.46-.145-.848-.44-1.167-.293-.316-.67-.476-1.127-.476-.457 0-.832.16-1.128.476-.292.32-.44.708-.44 1.167m-4.556-.9c.262-.814.734-1.537 1.42-2.172a1.167 1.167 0 0 0-.734-.268c-.326 0-.613.133-.858.398a1.316 1.316 0 0 0-.367.928c0 .53.18.902.539 1.114M23 11.911c0 1.094-.44 1.89-1.324 2.383.034.179.05.425.05.744 0 2.013-.955 3.735-2.866 5.167-1.91 1.43-4.206 2.145-6.884 2.145s-4.965-.708-6.86-2.121c-1.896-1.412-2.843-3.125-2.843-5.14 0-.352.017-.616.05-.795C1.44 13.801 1 13.004 1 11.91c0-.74.245-1.37.733-1.88.492-.513 1.063-.77 1.717-.77.588 0 1.127.229 1.616.69C6.864 8.607 8.97 7.884 11.39 7.778h.096l1.52-5.459 4.409.952C17.87 2.423 18.509 2 19.324 2h.05c.621 0 1.135.231 1.543.69.408.459.613 1.024.613 1.696 0 .67-.205 1.236-.613 1.696a1.975 1.975 0 0 1-1.542.687h-.05c-.555 0-1.046-.203-1.47-.608a2.186 2.186 0 0 1-.686-1.51l-3.283-.743-1.078 3.921c2.484.177 4.524.885 6.126 2.121.488-.461 1.045-.69 1.665-.69.653 0 1.218.257 1.69.77.474.51.711 1.14.711 1.88" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconReddit-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconReddit = styled(IconRedditSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconReddit.propTypes = {
  size: PropTypes.number
};
IconReddit.defaultProps = {
  size: 24
}; // @component

module.exports = IconReddit;
